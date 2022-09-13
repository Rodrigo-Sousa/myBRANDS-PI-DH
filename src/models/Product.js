// Ficando a estrutura do nossos produtos no model replica da tabela do BD. Importando o BD.
const database = require("../config/sequelize");
// Variável do Sequelize
const Sequelize = require("sequelize");

// Criando a variável do produto, com a definição do que ele será
const product = database.define("product", {
    // Estrutura do BD. O Modelo das nossas entidades no Back End
    id: {
        // Recebendo algumas chaves. Type: é o tipo do dado
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        // Auto incremento
        autoIncrement: true,
        // Chave primaria
        primaryKey: true,
    },
    name: {
        type: Sequelize.DataTypes.STRING(250),
        allowNull: false,
    },
    category: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
    },
    brand: {
        type: Sequelize.DataTypes.STRING(200),
    },
    price: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    inventory: {
        type: Sequelize.DataTypes.INTEGER(250),
        allowNull: false,
    },
    available: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    urlImage: {
        type: Sequelize.DataTypes.STRING(250),
        allowNull: false,
    },
    // // Dia que o dado foi cadastrado.
    // created_at: {},
    // // Última atualização feita nesse campo.
    // updated_at: {}

},
    {
        // Por não termos essas duas colunas (de criação e última atualização), desativamos esse timestamps
        timestamps: false,
    });

// Exportando
module.exports = product;