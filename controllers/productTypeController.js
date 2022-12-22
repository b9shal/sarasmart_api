function productTypeController(dbClient) {
  async function getAllProductType(req, res) {
    try {
      const data = await dbClient.ProductType.findAll({
        include: [{ model: Category, attributes: ["name"] }],
      });

      res.status(200).json({ data, message: "operation successful" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "operation failed" });
    }
  }

  async function addProductType(req, res) {
    try {
      const data = await ProductType.create({
        ...req.body,
      });

      res.status(200).json({ data, message: "operation successful" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "operation failed" });
    }
  }

  async function updateProductType(req, res) {
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
  }

  async function deleteProductType(req, res) {
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
  }
  return {
    addProductType,
    deleteProductType,
    updateProductType,
    getAllProductType,
  };
}
module.exports = productTypeController;
