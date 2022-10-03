const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Gift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Owner, { foreignKey: 'owner_id' });
      this.belongsTo(models.User, { foreignKey: 'giver_id' });
    }
  }
  Gift.init({
    owner_id: DataTypes.INTEGER,
    giver_id: DataTypes.INTEGER,
    wish_status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Gift',
  });
  return Gift;
};
