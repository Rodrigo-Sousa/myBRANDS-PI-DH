const fs = require("fs");
const path = require("path");
const bcrypt = require("../helpers/bcrypt");

const authController = {
  
  // Processamento do cadastro do usuário
  create: (req, res) => {
    const usersJson = fs.readFileSync(path.join(__dirname, "..", "data", "users.json"), "utf-8");
    const users = JSON.parse(usersJson);

    const { nome, usuario, email, senha, confirmar_senha} = req.body;
    if(!nome || !usuario || !email || !senha || !confirmar_senha) {
      return res.render("registration", { title: "Cadastro", error: { message: "Preencha todos os campos",},});
    }
    if(senha !== confirmar_senha) {
      return res.render("registration", { title: "Cadastro", error: { message: "Senhas não coincidem",},});
    }
    const newId = users[users.length -1].id +1;
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
  authAdm: (req, res) => {
    res.clearCookie("user");
    res.clearCookie("admin");

    const usersJson = fs.readFileSync(path.join(__dirname, "..", "data", "admin.json"), "utf-8");
    const users = JSON.parse(usersJson);
    const { email, senha } = req.body;
    const userAuth = users.find(user =>{
      if(user.email === email){
        if(bcrypt.compareHash(senha, user.senha)){
          return true;
        }
      }
    });
    if(!userAuth){
      return res.render("login-adm", { title: "Login", error: { message: "Email ou senha inválidos" }});
    }
    const user = JSON.parse(JSON.stringify(userAuth, ["id", "nome", "admin"]));
    req.session.email = userAuth.email
    res.cookie("user", user);
    res.cookie("admin", user.admin);

    res.redirect("/home-adm");
  },
  // Processamento do login usuário
  authUser: (req, res) => {
    res.clearCookie("user");
    res.clearCookie("admin");

    const usersJson = fs.readFileSync(path.join(__dirname, "..", "data", "users.json"), "utf-8");
    const users = JSON.parse(usersJson);
    const { email, senha } = req.body;
    const userAuth = users.find(user =>{
      if(user.email === email){
        if(bcrypt.compareHash(senha, user.senha)){
          return true;
        }
      }
    });
    if(!userAuth){
      return res.render("login", { title: "Login", error: { message: "Email ou senha inválidos" }});
    }
    const user = JSON.parse(JSON.stringify(userAuth, ["id", "nome", "admin"]));
    req.session.email = userAuth.email
    res.cookie("user", user);
    res.cookie("admin", user.admin);

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