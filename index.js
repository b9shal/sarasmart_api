const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { default: helmet } = require("helmet");
const routes = require("./routes");
const dbClient = require("./models");
const auth = require("./middleware/auth");

function main() {
  const app = express();

  app.use(express.json());

  app.use(helmet());
  app.use(cors());
  dotenv.config();

  // app.use(auth);

  app.use("/api", express.static("public"));

  const port = process.env.APP_PORT || 5001;

  app.listen(port, function () {
    console.log(`app is running at port ${port}`);
    routes(app, dbClient);
  });
}

main();
