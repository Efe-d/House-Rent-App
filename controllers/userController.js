const db = require("../models");

const addUser = async (req, res) => {
  let info = {
    userName: req.body.name,
    password: req.body.password,
    typeId: req.body.typeId,
  };

  const user = await db.User.create(info);
  res.status(200).json(user);
  console.log(user);
};

const getUsers = async (req, res) => {
  let users = await db.User.findAll({
    include: [
      {
        model: db.Type,
        as: "type",
      },
    ],
  });
  res.status(200).json(users);
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  await db.User.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).json({
    message: "User deleted",
  });
};

const updateUser = async (req, res) => {
  let id = req.params.id;
  await db.User.update(req.body, { where: { id: id } });
  res.status(200).json({ message: "User updated" });
};

const getUserByType = async (req, res) => {
  let typeId = req.params.typeId;
  let users = await db.User.findAll({
    where: {
      typeId: typeId,
    },
    include: [
      {
        model: db.Type,
        as: "type",
      },
    ],
  });
  res.status(200).json(users);
};
module.exports = {
  addUser,
  getUsers,
  deleteUser,
  getUserByType,
  updateUser,
};
