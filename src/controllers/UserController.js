
const UserController = {
    // Tela para cadastro do usuário
    register: (req, res) => {
        return res.render("registration", { title: "Cadastro", });
    },
    registration: (req, res) => {
        return res.render("registration", {title: "Cadastro"});
    },
    loginUser: (req, res) => {
        return res.render("login-user", {title: "Login Usuário", user: req.cookies.user});
    },
    personal: (req, res) => {
        return res.render("user-data", {title: "Info usuário"});
    },
};

module.exports = UserController;