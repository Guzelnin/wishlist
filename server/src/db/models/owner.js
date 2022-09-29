const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Wish, { foreignKey: 'wish_id' });
      this.hasMany(models.Gift, { foreignKey: 'owner_id' });
    }
  }
  Owner.init({
    wish_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    private: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    date: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Owner',
  });
  return Owner;
};
