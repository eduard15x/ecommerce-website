require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_DB = process.env.MONGO_DB;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// routes import
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
// const adminRoutes = require("./routes/admin");
const mongoose = require("mongoose");

// express app
const app = express();
app.use(cors());
// Increase the maximum payload size to 50MB
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/eduard", productsRoutes);
app.use("/eduard/user", usersRoutes); // -> www.blabla.com/eduard/user/login
// app.use("/admin", adminRoutes); // -> www.blabla.com/admin

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
