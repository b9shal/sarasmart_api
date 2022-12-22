const { categoryController } = require("../controllers");

function categoryRoutes(router, dbClient) {
  const { getAllCategories, addCategory, updateCategory, deleteCategory } =
    categoryController(dbClient);

  router.get("/api/category/getAll", getAllCategories);

  router.post("/add", addCategory);

  router.patch("/update/:id", updateCategory);

  router.delete("/delete/:id", deleteCategory);
}

module.exports = categoryRoutes;
