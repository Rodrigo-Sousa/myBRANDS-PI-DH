// Importando o sequelize
const Sequelize = require("sequelize");
// Importando o banco de dados
const configDB = require("../config/database");
// Criando um objeto da calsse do sequelize
const db = new Sequelize(configDB);

const adminController = {
    // Listando todos os usuários
    index: async(req,res)=>{
        // Lidaremos com promessas
        try {
            const users = await db.query(
                // Recebe 2 parâmetros, uma string e o segundo um objeto
                "SELECT * FROM users;",{
                    type: Sequelize.QueryTypes.SELECT,

                }
            );
            console.log(users);
        } catch (error){
            console.log(error)
        }
    },
    show: async(req,res)=>{},
    store: async(req,res)=>{},
    update: async(req,res)=>{},
    destroy: async(req,res)=>{},
    
};

module.exports = adminController;