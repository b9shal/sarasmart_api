const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const categoryRoute = require("./routes/categoryRoute");
const productTypeRoute = require("./routes/productTypeRoute");
const productRoute = require("./routes/productRoute");
const productImageRoute = require("./routes/productImageRoute");
const { default: helmet } = require("helmet");

function main() {
  const app = express();

  app.use(express.json());

  dotenv.config();
  app.use(cors());

  app.use(helmet());

  app.use("/api", express.static("public"));

  app.use("/api/category", categoryRoute);
  app.use("/api/productType", productTypeRoute);
  app.use("/api/product", productRoute);
  app.use("/api/productImage", productImageRoute);

  const port = process.env.APP_PORT || 5001;

  app.listen(port, function () {
    console.log(`app is running at port ${port}`);
  });
}

main();