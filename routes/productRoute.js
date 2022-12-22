const { productController } = require("../controllers");

function productRoutes(router, dbClient) {
  const { getAllProducts, addProduct, updateProduct, deleteProduct } =
    productController(dbClient);

  router.get("/api/product/getAll", getAllProducts);

  router.post("/api/product/add", addProduct);

  router.patch("/api/product/update/:id", updateProduct);

  router.delete("/api/product/delete/:id", deleteProduct);
}

module.exports = productRoutes;
