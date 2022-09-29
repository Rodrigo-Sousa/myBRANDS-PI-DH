// Relacionamentos
const db = require("../config/sequelize");
const { DataTypes } = require("sequelize");
const product = require("./Product")

const compras = db.define(
  "compras",
  {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      product_name: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      product_price: {
        type: DataTypes.DECIMAL(10),
        allowNull: false,
      },
      quantity_item: {
        type: DataTypes.DECIMAL(10),
        allowNull: false,
      }
  },
  {
    timestamps: false,
  }
);


module.exports = compras;
