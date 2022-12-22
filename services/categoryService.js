const { dbClient } = require("../config/appConfig");

module.exports = {
  getAllCategories,
  getCategoryById,
  addCategory,
  deleteCategory,
  updateCategory,
};

function getAllCategories() {
  return dbClient.Category.findAll();
}

function getCategoryById() {
  return dbClient.Category.findAll({
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
}

function addCategory(data) {
  return dbClient.Category.create(data);
}

function deleteCategory(id) {
  return dbClient.Category.destroy({
    where: {
      id,
    },
  });
}

function updateCategory(id, data) {
  return dbClient.Category.update(data, {
    where: {
      id,
    },
  });
}
