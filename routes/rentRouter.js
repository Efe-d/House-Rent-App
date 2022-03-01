const rentController = require("../controllers/rentController");

const router = require("express").Router();

router.post("/Add", rentController.addRent);
router.get("/GetAll", rentController.getRents);
router.get("/Get/:id", rentController.getRentbyLocation);
router.delete("/Delete/:id", rentController.deleteRent);
router.put("/Update/:id", rentController.updateRent);

module.exports = router;
