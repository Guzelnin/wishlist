const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Wish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, { foreignKey: 'category_id', onDelete: 'CASCADE' });
      this.hasMany(models.Owner, {
        foreignKey: 'wish_id',
      });
    }
  }
  Wish.init({
    name: DataTypes.STRING,
    link: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    category_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Wish',
  });
  return Wish;
};
