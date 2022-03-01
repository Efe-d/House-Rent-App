const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const userRouter = require("./routes/userRouter");
const locationRouter = require("./routes/locationRouter");
const rentRouter = require("./routes/rentRouter");
const typeRouter = require("./routes/typeRouter");

app.use("/api/users", userRouter);
app.use("/api/locations", locationRouter);
app.use("/api/rents", rentRouter);
app.use("/api/types", typeRouter);


const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
