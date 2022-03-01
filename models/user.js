"use strict";
const { Model } = require("sequelize");

const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Type, {
        foreignKey: "typeId",
        as: "type",
      });
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      typeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",

      hooks: {
        beforeCreate(attributes, options) {
          attributes.password = bcrypt.hashSync(attributes.password, 10);
        },
      },
    }
  );
  return User;
};
