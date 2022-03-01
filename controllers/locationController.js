const db = require("../models");

const addLocation = async (req, res) => {
  let info = {
    locationName: req.body.name
  };

  const location = db.Location.create(info);
  res.status(200).json(location);
  console.log(location);
};

const getLocations = async (req, res) => {
  db.Location.findAll().then((locations) => {
    res.status(200).json(locations);
  });
};

const deleteLocation = async (req, res) => {
  let id = req.params.id;
  db.Location.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).json({
    message: "Location deleted",
  });
};

const updateLocation = async (req, res) => {
  let id = req.params.id;
  await db.Location.update(req.body, { where: { id: id } });
  res.status(200).json({ message: "Location updated" });
};

module.exports = {
  addLocation,
  getLocations,
  deleteLocation,
  updateLocation,
};
