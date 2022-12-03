const express = require("express");
const { Category } = require("../models");

const router = express.Router();


router.get("/getAll", async function (req, res) {
  try {
    const categories = await Category.findAll();

    res.status(200).json({ data: categories, message: "operation successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "operation failed" });
  }
});


router.get("/getById/:categoryId", async function (req, res) {
  try {
    const categories = await Category.findAll({
      where: {
        id: req.params.categoryId,
      },
      include: {
        model: ProductType,
        attributes: ["name"],
        include: {
          model: Product,
          include: {
            model: ProductImage,
            attributes,
          },
        },
      },
    });

    res.status(200).json({ data: categories, message: "operation successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "operation failed" });
  }
});

router.post("/add", async function (req, res) {
  try {
    const categories = await Category.create({
      ...req.body,
    });

    res.status(200).json({ data: categories, message: "operation successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "operation failed" });
  }
});

router.patch("/update/:id", async function (req, res) {
  try {
    await Category.update(
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
    const categories = await Category.destroy({
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
