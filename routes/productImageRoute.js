const express = require("express");
const { ProductImage } = require("../models");
const fileUpload = require("../utils/fileUpload");
const models = require("../models");

const router = express.Router();

router.post("/add/:productId", fileUpload, async function (req, res) {
  try {
    const images = req.files.map((file) => ({
      imageUrl: file.path,
      productId: req.params.productId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await models.sequelize.queryInterface.bulkInsert(
      models.ProductImage.getTableName(),
      images
    );

    res.json({ data: images, message: "success" });
  } catch (err) {
    res.json({ message: "error" });
  }
});

router.delete("/delete", async function (req, res) {
  try {
    await ProductImage.destroy({
      where: {
        id: req.body.imageIds,
      },
    });

    res.status(200).json({ message: "request successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "operation failed" });
  }
});

module.exports = router;
