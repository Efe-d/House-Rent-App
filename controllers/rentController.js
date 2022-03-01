const db = require("../models");

const addRent = async (req, res) => {
  let info = {
    locationId: req.body.locationId,
    price: req.body.price,
    pictures: req.body.pictures,
    landl: req.body.landl,
  };

  const rent = await db.Rent.create(info);
  res.status(200).json(rent);
  console.log(rent);
};

const getRents = async (req, res) => {
  let rents = await db.Rent.findAll({
    include: [
      {
        model: db.Location,
        as: "location",
      },
    ],
  });
  res.status(200).json(rents);
};

const getRentbyLocation = async (req, res) => {
  let locationId = req.params.id;
  db.Rent.findAll({
    where: {
      locationId: locationId,
    },

    include: [
      {
        model: db.Location,
        as: "location",
      },
    ],
  }).then((rents) => {
    res.status(200).json(rents);
  });
};

const deleteRent = async (req, res) => {
  let id = req.params.id;
  db.Rent.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).json({
    message: "Rent deleted",
  });
};

const updateRent = async (req, res) => {
  let id = req.params.id;
  await db.Rent.update(req.body, { where: { id: id } });
  res.status(200).json({ message: "Rent updated" });
};

module.exports = {
  addRent,
  getRents,
  getRentbyLocation,
  deleteRent,
  updateRent,
};
