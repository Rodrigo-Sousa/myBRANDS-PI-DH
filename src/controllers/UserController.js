const db = require("../config/sequelize");
// const User = require("../models/User");
// const Order = require("../models/Order");
// const Product = require("../models/Product");
const { Op } = require("sequelize");
const sequelize = require("sequelize");
const userController = {
    // Busca todos os usuários no banco de dados
    index: async (req, res) => {

        // Lidaremos com promessas
        try {
            const users = await db.query(
                // Recebe 2 parâmetros, uma string e o segundo um objeto
                "SELECT * FROM users;", {
                type: sequelize.QueryTypes.SELECT,

            }
            );

            // Retornando para a rota de index do usuário, com uma mensagem
            res.status(200).json({data: users, message: "Busca realizada com sucesso!"});

        } catch (error) {
            console.log(error);
            res.status(400).json({message: "Erro na busca dos usuários!"});
        }

    },
    show: async (req, res) => {

        // Id o usuário que iremos buscar
        const {id} = req.params;
        try{

            const users = await db.query(`SELECT * FROM users WHERE id = ${id}`,{
                type: sequelize.QueryTypes.SELECT,
            });
            // Validando o retorno pro usuário
            if(users.length >0 ){
                // Mensagem de retorno
                res.status(200).json({data: users[0]});
            }else{
                res.status(400).json({data:{}, message:"Nenhum usuário encontrado"});
            }
            
        }catch(error){
            console.log(error);
            res.status(400).json({message:"Erro ao encontrar o usuário!"});
        }
    },
    store: async (req, res) => {
        const {  name, email, senha, birthdate, cpf, picture, phone, celphone, bredIn, changedIn} = req.body;
        try {
            const users = await db.query("INSERT INTO users (name, email, senha, birthdate, cpf, picture, phone, celphone, bredIn, changedIn) VALUES (:name, :email, :senha, :birthdate, :cpf, :picture, :phone, :celphone, :bredIn, :changedIn)",{
                type: sequelize.QueryTypes.INSERT,
            });
            console.log(users);
            res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Erro ao criar usuário" });
        }
    },
    update: async (req, res) => {
        const {  name, email, senha, birthdate, cpf, picture, phone, celphone, bredIn, changedIn} = req.body;
        const { id } = req.params;
        try {
            const users = await db.query("UPDATE users SET name = :name, email = :email, senha = :senha, birthdate = :birthdate, cpf = :cpf, picture = :picture, phone = :phone, celphone = :celphone, bredIn = :bredIn, changedIn = :changedIn WHERE id = :id",
                {
                    type: sequelize.QueryTypes.UPDATE,
                },
                {
                    where: { id },
                }
            );
            console.log(users);
            res.status(200).json({ message: "Usuário atualizado com sucesso" });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Erro ao atualizar usuário" });
        }
    },
    destroy: async (req, res) => {
        const { id } = req.params;
        try {
            // const users = await User.update({ is_active: 0 }, { where: { id } });
            const users = await User.destroy({ where: { id } });
            console.log(users);
            res.status(200).json({ message: "Usuário deletado com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Erro ao deletar usuário" });
        }
    },
    // Tela para cadastro do usuário
    register: (req, res) => {
        return res.render("registration", { title: "Cadastro", });
    },
    registration: (req, res) => {
        return res.render("registration", { title: "Cadastro" });
    },
    loginUser: (req, res) => {
        return res.render("login-user", { title: "Login Usuário", user: req.cookies.user });
    },
    personal: (req, res) => {
        return res.render("user-data", { title: "Info usuário" });
    },
};
module.exports = userController;
