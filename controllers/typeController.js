const db = require("../models");

const addType = async (req, res) => {
  let info = {
    typeName: req.body.name,
  };

  const type = await db.Type.create(info);
  res.status(200).json(type);
  console.log(type);
};

const getTypes = async (req, res) => {
  db.Type.findAll().then((types) => {
    res.status(200).json(types);
  });
};

module.exports = {
  addType,
  getTypes,
};