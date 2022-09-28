const db = require("../config/sequelize");
const User = require("../models/User");
const Request = require("../models/Request");
// const Product = require("../models/Product");
const { Op } = require("sequelize");
const sequelize = require("sequelize");
const userController = {
    // Busca todos os usuários no banco de dados
    // index: async (req, res) => {

    //     // Lidaremos com promessas
    //     try {
    //         const users = await db.query(
    //             // Recebe 2 parâmetros, uma string e o segundo um objeto
    //             "SELECT * FROM users;", {
    //             type: sequelize.QueryTypes.SELECT,

    //         }
    //         );

    //         // Retornando para a rota de index do usuário, com uma mensagem
    //         res.status(200).json({data: users, message: "Busca realizada com sucesso!"});

    //     } catch (error) {
    //         console.log(error);
    //         res.status(400).json({message: "Erro na busca dos usuários!"});
    //     }

    // },
    // show: async (req, res) => {

    //     // Id o usuário que iremos buscar
    //     const {id} = req.params;
    //     try{

    //         const users = await db.query("SELECT * FROM users WHERE id = :id",{
    //             replacements: {
    //                 id,
    //               },
    //             type: sequelize.QueryTypes.SELECT,
    //         });
    //         console.log(users);
    //         if (users.length === 0) {
    //             //Faz o código parar nessa linha
    //             //E cai no catch
    //             throw Error("USER_NOT_FOUND");
    //           }
    //         // Mensagem de retorno
    //             res.status(200).json({data: users[0]});

    //     }catch(error){
    //         console.log(error);
    //         if(error.message === "USER_NOT_FOUND"){
    //             res.status(400).json({data:{}, message:"Nenhum usuário encontrado"});
    //         }else{
    //             res.status(400).json({message:"Erro ao encontrar o usuário!"});
    //         }
    //     }
    // },
    // store: async (req, res) => {
    //     const {  name, email, senha, birthdate, cpf, picture, phone, celphone, bredIn, changedIn} = req.body;
    //     try {
    //         const users = await db.query("INSERT INTO users (name, email, senha, birthdate, cpf, picture, phone, celphone, bredIn, changedIn) VALUES (:name, :email, :senha, :birthdate, :cpf, :picture, :phone, :celphone, :bredIn, :changedIn)",{
    //             type: sequelize.QueryTypes.INSERT,
    //         });
    //         console.log(users);
    //         res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    //     } catch (error) {
    //         console.log(error);
    //         res.status(400).json({ message: "Erro ao criar usuário" });
    //     }
    // },
    // update: async (req, res) => {
    //     // Realizando a validação
    //     if(!name && !email && !senha && !birthdate && !cpf && !picture && !phone && !celphone && !bredIn && !changedIn){
    //         throw Error ("Nenhum dado para atualizar.");
    //     }
    //     let query = "UPDATE users SET "
    //         if(name) query += "name = :name";
    //         if(email) {
    //             if(name) query += ", ";
    //             query += "email = :email";
    //         }
    //         if(senha){
    //             if(name || email) query += ", ";
    //             query += "senha = :senha";
    //         }
    //         if(birthdate){
    //             if(name || email || senha) query += ", ";
    //             query += "birthdate = :birthdate";
    //         } 
    //         if(cpf){
    //             if(name || email || senha || birthdate) query += ", ";
    //             query += "cpf = :cpf";
    //         } 
    //         if(picture){
    //             if(name || email || senha || birthdate || cpf) query += ", ";
    //             query += "picture = :picture";
    //         } 
    //         if(celphone){
    //             if(name || email || senha || birthdate || cpf || picture) query += ", ";
    //             query += "celphone = :celphone";
    //         } 
    //         if(bredIn){
    //             if(name || email || senha || birthdate || cpf || picture || celphone) query += ", ";
    //             query += "bredIn = :bredIn";
    //         } 
    //         if(changedIn){
    //             if(name || email || senha || birthdate || cpf || picture || celphone || bredIn) query += ", ";
    //             query += "changedIn = :changedIn";
    //         } 

    //      query += " WHERE id = :id"
    //     const {  name, email, senha, birthdate, cpf, picture, phone, celphone, bredIn, changedIn} = req.body;
    //     const { id } = req.params;
    //     try {
    //         const users = await db.query("UPDATE users SET name = :name, email = :email, senha = :senha, birthdate = :birthdate, cpf = :cpf, picture = :picture, phone = :phone, celphone = :celphone, bredIn = :bredIn, changedIn = :changedIn WHERE id = :id",
    //             {
    //                 type: sequelize.QueryTypes.UPDATE,
    //             },
    //             {
    //                 where: { id },
    //             }
    //         );
    //         console.log(users);
    //         res.status(200).json({ message: "Usuário atualizado com sucesso" });
    //     } catch (error) {
    //         console.log(error);
    //         res.status(400).json({ message: "Erro ao atualizar usuário" });
    //     }
    // },
    // destroy: async (req, res) => {
    //     const { id } = req.params;
    //     try {
    //         const users = await db.query(`DELETE FROM users WHERE id = ${id}`,{
    //             typeof: sequelize.QueryTypes.DELETE,
    //         });
    //         console.log(users);
    //         res.status(200).json({ message: "Usuário deletado com sucesso!" });
    //     } catch (error) {
    //         console.log(error);
    //         res.status(400).json({ message: "Erro ao deletar usuário" });
    //     }
    // },
    index: async (req, res) => {
        // Lidaremos com promessas
        try {
            const users = await User.findAll();
            console.log(users);
            // Retornando para a rota de index do usuários, com uma mensagem
            res.status(200).json({ data: users, menssage: "Listado todos os usuários" });
        } catch (error) {
            console.log(error)
        }

    },
    show: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findOne({
                // Buscando um parâmetro
                where: {
                    id: id,
                },
                // Incluíndo o relacionamento aos pedidos
                include: Request,
            })
            console.log(user);
            // if (users.length === 0) {
            //   // Faz o código parar
            //   throw Error("USER_NOT_FOUND");
            // }
            res.status(200).json({ data: user });

        } catch (error) {
            console.log(error);
            if (error.menssage === "USER_NOT_FOUND") {
                res.status(400).json({ message: "Usuário não encontrado" });
            } else {
                res.status(400).json({ message: "Erro ao encontrar o usuário" });
            }
        }
    },
    store: async (req, res) => {
        const { name, email, senha, birthdate, cpf, picture, phone, celphone, is_admin, bredIn, changedIn } = req.body;
        try {
            const users = await User.create({
                name,
                email,
                senha,
                birthdate,
                cpf,
                picture,
                phone,
                celphone,
                is_admin,
                bredIn,
                changedIn
            });
            console.log(users);
            res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Erro ao criar usuário" });
        }
    },
    update: async (req, res) => {
        const { name, email, senha, birthdate, cpf, picture, phone, celphone, is_admin, bredIn, changedIn } = req.body;
        const { id } = req.params;
        try {
            // Verificando os dados
            if (name && !email && !senha && !birthdate && !cpf && !picture && !phone && !celphone && !is_admin && !bredIn && !changedIn) {
                throw Error("Nenhum dado para atualizar");
            }
            const users = await User.update(
                {
                    name,
                    email,
                    senha,
                    birthdate,
                    cpf,
                    picture,
                    phone,
                    celphone,
                    is_admin,
                    bredIn,
                    changedIn
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
        return res.render("user-data", { title: "Info usuário",  user: req.cookies.user});
    },
};
module.exports = userController;
