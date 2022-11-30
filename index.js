const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const categoryRoute = require("./routes/categoryRoute");
const productTypeRoute = require("./routes/productTypeRoute");
const productRoute = require("./routes/productRoute");
const productImageRoute = require("./routes/productImageRoute");
const { default: helmet } = require("helmet");

function main() {
  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use(helmet());

  dotenv.config();

  app.use("/api/category", categoryRoute);
  app.use("/api/productType", productTypeRoute);
  app.use("/api/product", productRoute);
  app.use("/api/productImage", productImageRoute);

  const port = process.env.APP_PORT;

  app.listen(port || 5001, function () {
    console.log(`app is running at port${port}`);
  });
}

main();