const express = require("express");
const { ProductType, Category } = require("../models");

const router = express.Router();

router.get("/getAll", async function (req, res) {
  try {
    const data = await ProductType.findAll({
      include: [{ model: Category, attributes: ["name"] }],
    });

    res.status(200).json({ data, message: "operation successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "operation failed" });
  }
});

router.post("/add", async function (req, res) {
  try {
    const data = await ProductType.create({
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
    await ProductType.update(
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
    await ProductType.destroy({
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
