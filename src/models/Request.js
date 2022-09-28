// Relacionamentos
const db = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Requests = db.define(
  "requests",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Endereco: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    Numero: {
      type: DataTypes.DECIMAL(10),
      allowNull: false,
    },
    Cidade: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    Estado: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    Cep: {
      type: DataTypes.DECIMAL(10),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("processando", "a caminho", "entregue"),
      defaultValue: "processando",
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
    
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Requests;
