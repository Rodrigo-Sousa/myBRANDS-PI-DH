
// const UserController = {
// Tela para cadastro do usuário
// register: (req, res) => {
//     return res.render("registration", { title: "Cadastro", });
// },
// registration: (req, res) => {
//     return res.render("registration", {title: "Cadastro"});
// },
// loginUser: (req, res) => {
//     return res.render("login-user", {title: "Login Usuário", user: req.cookies.user});
// },
// personal: (req, res) => {
//     return res.render("user-data", {title: "Info usuário"});
// },
// };

// module.exports = UserController;

const db = require("../config/sequelize");
// const User = require("../models/User");
// const Order = require("../models/Order");
// const Product = require("../models/Product");
const { Op } = require("sequelize");
const sequelize = require("sequelize");
const userController = {
    // Busca os pedidos que um usuário possui e listar os produtos desses pedidos
    index: async (req, res) => {
        // const { search } = req.query;
        // try {
        //   let where = {};
        //   if (search) {
        //     where = {
        //       [Op.or]: {
        //         // name: "Paula2",
        //         name: {
        //           [Op.like]: `%${search}%`,
        //         },
        //         email: {
        //           [Op.like]: `%${search}%`,
        //         },
        //       },
        //     };
        //   }

        //   const users = await User.findAll({
        //     where,
        //     limit: 2,
        //     offset: 1,
        //     order: [
        //       ["name", "ASC"],
        //       ["email", "ASC"],
        //     ],
        //   });
        //   // console.log(users);
        //   res
        //     .status(200)
        //     .json({ data: users, message: "Busca realizada com sucesso" });
        // } catch (error) {
        //   console.log(error);
        //   res.status(400).json({ message: "Erro na busca de usuários" });
        // }

        // Lidaremos com promessas
        try {
            const users = await db.query(
                // Recebe 2 parâmetros, uma string e o segundo um objeto
                "SELECT * FROM users;", {
                type: sequelize.QueryTypes.SELECT,

            }
            );
            console.log(users);
        } catch (error) {
            console.log(error)
        }

    },
    // show: async (req, res) => {
    //     const { id } = req.params;
    //     try {
    //         const user = await User.findOne({
    //             where: {
    //                 id,
    //             },
    //             include: Order,
    //         });
    //         // const order = await Order.findAll({
    //         //   include: User,
    //         // });
    //         // console.log(order);

    //         const order = await Order.findAll({
    //             include: Product,
    //         });
    //         console.log(order);
    //         // const user = await User.findByPk(id);
    //         // console.log(user.Orders);
    //         if (!user) {
    //             throw Error("USER_NOT_FOUND");
    //         }
    //         // Voltamos as 21h
    //         res.status(200).json({ data: user });
    //     } catch (error) {
    //         console.log(error);
    //         if (error.message === "USER_NOT_FOUND") {
    //             res.status(400).json({ message: "Usuário não encontrado" });
    //         } else {
    //             res.status(400).json({ message: "Erro ao encontrar usuário" });
    //         }
    //     }
    //     // Voltamos as 21h
    // },
    // store: async (req, res) => {
    //     const { name, email, birthdate } = req.body;
    //     try {
    //         const users = await User.create({
    //             name,
    //             email,
    //             birthdate,
    //         });
    //         console.log(users);
    //         res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    //     } catch (error) {
    //         console.log(error);
    //         res.status(400).json({ message: "Erro ao criar usuário" });
    //     }
    // },
    // update: async (req, res) => {
    //     const { name, email, birthdate } = req.body;
    //     const { id } = req.params;
    //     try {
    //         const users = await User.update(
    //             {
    //                 name,
    //                 email,
    //                 birthdate,
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
    //         // const users = await User.update({ is_active: 0 }, { where: { id } });
    //         const users = await User.destroy({ where: { id } });
    //         console.log(users);
    //         res.status(200).json({ message: "Usuário deletado com sucesso!" });
    //     } catch (error) {
    //         console.log(error);
    //         res.status(400).json({ message: "Erro ao deletar usuário" });
    //     }
    // },
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
