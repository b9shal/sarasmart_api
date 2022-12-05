const express = require("express");
const { ProductType, Product, ProductImage } = require("../models");

const router = express.Router();

router.get("/getAll", async function (req, res) {
  try {
    const data = await Product.findAll({
      include: [
        { model: ProductType, attributes: ["name"] },
        { model: ProductImage, attributes: ["id", "imageUrl"] },
      ],
    });

    res.status(200).json({ data, message: "operation successful" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: err.original.sqlMessage, message: "operation failed" });
  }
});

router.post("/add", async function (req, res) {
  try {
    const data = await Product.create({
      ...req.body,
    });

    res.status(200).json({ data, message: "operation successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "operation failed" });
  }
});

router.patch("/update/:id", async function (req, res) {
  try {
    await Product.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({ message: "operation successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "operation failed" });
  }
});

router.delete("/delete/:id", async function (req, res) {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ message: "operation successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "operation failed" });
  }
});

module.exports = router;
