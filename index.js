const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");

const app = express();
// require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes);


mongoose
  .connect("URL", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = app.listen(8080, () => {
  console.log(`server Started on port ${8080}`);
});

