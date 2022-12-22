function productController(dbClient) {
  async function getAllProducts(req, res) {
    try {
      const data = await dbClient.Product.findAll({
        include: [
          { model: dbClient.ProductType, attributes: ["name"] },
          { model: dbClient.ProductImage, attributes: ["id", "imageUrl"] },
        ],
      });

      const resData = data.map((val) => {
        val.ProductImages = val.ProductImages.map((image) => {
          image.imageUrl = `${req.hostname}/${image.imageUrl}`;
          return image;
        });

        return val;
      });

      res.status(200).json({ resData, message: "operation successful" });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err.original.sqlMessage,
        message: "operation failed",
      });
    }
  }
  async function addProduct(req, res) {
    try {
      const data = await dbClient.Product.create({
        ...req.body,
      });
      res.status(200).json({ data, message: "operation successful" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "operation failed" });
    }
  }
  async function updateProduct(req, res) {
    try {
      await dbClient.Product.update(
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
  async function deleteProduct(req, res) {
    try {
      await dbClient.Product.destroy({
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
    getAllProducts,
    addProduct,
    deleteProduct,
    updateProduct,
  };
}

module.exports = productController;
