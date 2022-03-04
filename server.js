require('dotenv').config();

const express = require("express");
const cors = require("cors");
const tokenCheck = require("./middleware/tokenCheck.middleware");
const userRouter = require("./routes/userRouter");
const locationRouter = require("./routes/locationRouter");
const rentRouter = require("./routes/rentRouter");
const typeRouter = require("./routes/typeRouter");
const authRouter = require("./routes/authRouter");

const app = express();

app.use(express.json());
app.use(cors());



app.use("/api/users", tokenCheck, userRouter);
app.use("/api/locations", tokenCheck, locationRouter);
app.use("/api/rents", tokenCheck, rentRouter);
app.use("/api/types", tokenCheck, typeRouter);
app.use("/api/auth", authRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
