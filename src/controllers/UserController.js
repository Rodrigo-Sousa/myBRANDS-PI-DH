
const UserController = {
    // Tela para cadastro do usuário
    register: (req, res) => {
        return res.render("registration", { title: "Cadastro", });
    },
    registration: (req, res) => {
        return res.render("registration", {title: "Cadastro"});
    },
    login: (req, res) => {
        return res.render("login", {title: "Login", user: req.cookies.user, admin: req.cookies.admin});
    },
    personal: (req, res) => {
        return res.render("user-data", {title: "Info usuário"});
    },
};

module.exports = UserController;