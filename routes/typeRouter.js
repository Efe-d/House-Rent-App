const typeController = require('../controllers/typeController');

const router = require("express").Router();

router.post("/Add", typeController.addType);
router.get("/GetAll", typeController.getTypes);


module.exports = router;
