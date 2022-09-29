const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Owner, {
        foreignKey: 'user_id',
      });
      this.hasMany(models.Owner, {
        foreignKey: 'user_id',
      });
      this.hasMany(models.Friend, { foreignKey: 'req_user_id' });
      this.hasMany(models.Friend, { foreignKey: 'res_user_id' });
      this.hasMany(models.Gift, { foreignKey: 'giver_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    bday: DataTypes.DATEONLY,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
