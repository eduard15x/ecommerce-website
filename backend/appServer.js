require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_DB = process.env.MONGO_DB;

const express = require("express");
const cors = require("cors");
// routes import
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const mongoose = require("mongoose");

// express app
const app = express();
app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/eduard", productsRoutes);
app.use("/eduard/user", usersRoutes); // -> www.blabla.com/eduard/user/login

// connection to mongodb
mongoose
  .connect(MONGO_DB)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log("connected to db & listening on port " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
