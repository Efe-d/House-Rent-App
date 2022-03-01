const locationController = require("../controllers/locationController");

const router = require("express").Router();

router.post("/Add", locationController.addLocation);
router.get("/Get", locationController.getLocations);
router.delete("/Delete/:id", locationController.deleteLocation);
router.put("/Update/:id", locationController.updateLocation);

module.exports = router;
