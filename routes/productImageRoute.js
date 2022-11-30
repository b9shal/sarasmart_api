const express = require("express");
const { ProductImage } = require("../models");
const fileUpload = require("../utils/fileUpload");

const router = express.Router();

router.post(
  "/add/:productId",
  // async function (req, res, next) {
  //   try {
  //     const data = await ProductImage.createMany({
  //       imageUrl: req.body.productImage,
  //     });

  //     res.status(200).json({ data, message: "operation successful" });

  //     next();
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json({ message: "operation failed" });
  //   }
  // },
  fileUpload
);

router.delete("/delete/:imageId", async function (req, res) {
  try {
    await ProductImage.destroy({
      where: {
        id: req.params.imageId,
      },
    });

    res.status(200).json({ message: "operation successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "operation failed" });
  }
});

module.exports = router;
