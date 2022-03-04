const AuthService = require("../service/authService");
const authService = new AuthService();
const Register = async (req, res) => {  
  const info = {
    userName: req.body.userName,
    password: req.body.password,
    typeId: req.body.typeId,
  };

  //check if userName already exists
  const user = await authService.register(info);
  res.stastus(200).json(user);
};

const Login = async (req, res) => {
  let info = {
    userName: req.body.userName,
    password: req.body.password,
  };
  const user = await db.User.findOne({
    where: {
      userName: info.userName,
    },
  });
  if (user) {
    const match = await bcypt.compare(info.password, user.password);
    if (match) {
      const token = jwt.sign(
        {
          id: user.id,
          userName: user.userName,
        },
        "secret",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        message: "Login successful",
        token: token,
      });
    } else {
      res.status(401).json({
        message: "Invalid credentials",
      });
    }
  } else {
    res.status(401).json({
      message: "Login failed",
    });
  }
};

module.exports = {
  Login,
  Register,
};
