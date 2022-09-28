const db = require("../config/sequelize");
const User = require("../models/User");
const Request = require("../models/Request");
// const Product = require("../models/Product");
const { Op } = require("sequelize");
const sequelize = require("sequelize");
const userController = {
    // Busca todos os usuários no banco de dados
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
        console.log(req.body);
        const { name, celphone, email, birthdate, picture } = req.body;
        const { id } = req.params;
        try {
            // Verificando os dados
            if (name && !celphone && !email && !birthdate && !picture) {
                throw Error("Nenhum dado para atualizar");
            }
            const users = await User.update(
                {
                    name,
                    celphone,
                    email,
                    birthdate,
                    picture
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
        return res.render("login-user", { title: "Login Usuário", user: req.cookies.user});
    },
    personal: (req, res) => {
        return res.render("user-data", { title: "Info usuário",  user: req.cookies.user});
    },
};
module.exports = userController;
