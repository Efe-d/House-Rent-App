"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    static associate(models) {
      Rent.belongsTo(models.Location, {
        foreignKey: "locationId",
        as: "location",
      });
    }
  }
  Rent.init(
    {
      locationId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      pictures: DataTypes.STRING,
      landl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Rent",
    }
  );
  return Rent;
};
