const db = require("../config/sequelize");
const Sequelize = require("sequelize");
const Request = require("./Request");

const users = db.define(
  "users",
  {
    id:{
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
      name: {
        type: Sequelize.DataTypes.STRING(100),
        // Não permite valor nulo
      // Por padrão ele permite nulo
      allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING(100),
      allowNull: false,
      },
      senha: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      birthdate: {
        type: Sequelize.DataTypes.DATEONLY,
      },
      cpf: {
        type: Sequelize.DataTypes.STRING(11),
        allowNull: false,
      },
      picture: {
        type: Sequelize.DataTypes.STRING(250),
      },
      phone: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
      },
      celphone: {
        type: Sequelize.DataTypes.STRING(11),
        allowNull: false,
      },
      is_admin: {
        type: Sequelize.DataTypes.TINYINT,
        defaultValue: 0,
      },
      bredIn: {
        type: Sequelize.DataTypes.DATE,
      },
      changedIn: {
        type: Sequelize.DataTypes.DATE,
      },
  }, 

  {
    // Não criar tabela com os campos created_at e updated_at
    timestamps: false,
  }
);

users.hasMany(Request, {
  foreignKey: "user_id",
});
// Váris pedidos, pertence há um usuário
Request.belongsTo(users, {
  foreignKey: "user_id",
});
module.exports = users;
