const fs = require("fs");
const path = require("path");
const bcrypt = require("../helpers/bcrypt");
const User = require("../models/User");
const UserController = require("./UserController");

const authController = {

  // Processamento do cadastro do usuário
  create: (req, res) => {
    const usersJson = fs.readFileSync(path.join(__dirname, "..", "data", "users.json"), "utf-8");
    const users = JSON.parse(usersJson);

    const { nome, usuario, email, senha, confirmar_senha } = req.body;
    if (!nome || !usuario || !email || !senha || !confirmar_senha) {
      return res.render("registration", { title: "Cadastro", error: { message: "Preencha todos os campos", }, });
    }
    if (senha !== confirmar_senha) {
      return res.render("registration", { title: "Cadastro", error: { message: "Senhas não coincidem", }, });
    }
    const newId = users[users.length - 1].id + 1;
    const newUser = {
      id: newId,
      nome,
      usuario,
      email,
      senha: bcrypt.generateHash(senha),
      admin: false,
      criadoEm: new Date(),
      modificadoEm: new Date(),
    };
    users.push(newUser);
    fs.writeFileSync(path.join(__dirname, "..", "data", "users.json"), JSON.stringify(users));
    return res.redirect("/");
  },

  // Processamento do login admin
  authAdm: async (req, res) => {
    res.clearCookie("user");
    res.clearCookie("admin");

    const { email, senha } = req.body;
    const userAuth = await User.findOne(
      {
        where: {
          email: email,
          is_admin: 1
        }
      }
    )
    if (!userAuth) {
      return res.render("login-adm", { title: "Login", error: { message: "Email ou senha inválidos" } });
    }
    if (!bcrypt.compareHash(senha, userAuth.senha)) {
      return res.render("login-adm", { title: "Login", error: { message: "Email ou senha inválidos" } });
    }
    // const user = JSON.parse(JSON.stringify(userAuth, ["id", "nome", "admin"]));
    req.session.email = userAuth.email
    res.cookie("user", userAuth);
    res.cookie("admin", userAuth.is_admin);
    res.redirect("/product-adm");
  },
  // Processamento do login usuário
  authUser: async (req, res) => {
    res.clearCookie("user");
    res.clearCookie("admin");
    const { email, senha } = req.body;
    const userAuth = await User.findOne(
      {
        where: {
          email: email,
          is_admin: 0
        }
      }
    )
    console.log(userAuth);
    if (!userAuth) {
      return res.render("login-user", { title: "Login-user", error: { message: "Email ou senha inválidos" } });
    }
    if (!bcrypt.compareHash(senha, userAuth.senha)) {
      return res.render("login-user", { title: "Login-user", error: { message: "Email ou senha inválidos" } });
    }
    req.session.email = userAuth.email
    res.cookie("user", userAuth);
    res.cookie("admin", userAuth.admin);

    res.redirect("/");
  },
  // Processamento do deslogar
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("user");
    res.clearCookie("admin");
    res.redirect("/")
  },
};

module.exports = authController;