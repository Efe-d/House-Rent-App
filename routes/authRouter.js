const authRouter = require('../controllers/authController');

const router = require('express').Router();

router.post('/Login', authRouter.Login);
router.post('/Register', authRouter.Register);


module.exports = router;