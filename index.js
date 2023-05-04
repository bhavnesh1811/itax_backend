const express = require("express");
require("dotenv").config();
const { connection } = require("./Configs/db");
const { ProfileRouter } = require("./Routes/profile.route");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Api is working fine" });
});

app.use("/profile", ProfileRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Not Connected to DB");
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});
