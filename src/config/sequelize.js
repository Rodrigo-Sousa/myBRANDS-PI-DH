// Importando o sequelize
const Sequelize = require("sequelize");
// chamando a configuração do banco de dados
const config = require("./database");
// Criando a variável sequelize e atribuindo o Sequelize.configuration
const sequelize = new Sequelize(config);

// Exportando o sequelize
module.exports = sequelize;
