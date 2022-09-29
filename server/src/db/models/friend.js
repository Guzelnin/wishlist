'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'req_user_id' });
      this.belongsTo(models.User, { foreignKey: 'res_user_id' });
    }
  }
  Friend.init({
    req_user_id: DataTypes.INTEGER,
    res_user_id: DataTypes.INTEGER,
    request: DataTypes.BOOLEAN,
    accepted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Friend',
  });
  return Friend;
};