const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const dbClient = require("../models");

const app = express();
const router = express.Router();

const appConfig = function () {
  app.use(express.json());

  app.use(cors());

  dotenv.config();

  app.listen(process.env.APP_PORT || 5000, function () {
    console.log("app is running at port 5000");
  });
};

module.exports = {
  router,
  appConfig,
  dbClient,
};
