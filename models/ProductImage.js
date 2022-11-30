"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      ProductImage.belongsTo(models.Product, {
        foreignKey: "productId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  ProductImage.init(
    {
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      productId: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "ProductImage",
      tableName: "productImage",
    }
  );
  return ProductImage;
};
