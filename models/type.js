'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    static associate(models) {
      Type.hasMany(models.User, {
        foreignKey: "typeId",
        as: "users",
      });
    }
  }
  Type.init({
    typeName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};