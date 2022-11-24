const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const categoryRoute = require("./routes/category");

function main() {
  const app = express();

  app.use(express.json());

  app.use(cors());

  dotenv.config();

  app.use("/api/category", categoryRoute);

  app.listen(process.env.APP_PORT || 5000, function () {
    console.log("app is running at port 5000");
  });
}

main();
