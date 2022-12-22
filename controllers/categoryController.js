function categoryController(dbClient) {
  async function getAllCategories(req, res) {
    try {
      const categories = await dbClient.Category.findAll();

      res
        .status(200)
        .json({ data: categories, message: "operation successful" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.name, message: "operation failed" });
    }
  }

  async function addCategory(req, res) {
    try {
      const categories = await Category.create({
        ...req.body,
      });

      res
        .status(200)
        .json({ data: categories, message: "operation successful" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "operation failed" });
    }
  }

  async function updateCategory(req, res) {
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
  }

  async function deleteCategory(req, res) {
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
  }

  return {
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory,
  };
}

module.exports = categoryController;
