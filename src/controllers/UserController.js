const UserController = {
    registration: (req, res) => {
        return res.render("registration", {title: "Cadastro"});
    },
    login: (req, res) => {
        return res.render("login", {title: "Login"});
    },
    personal: (req, res) => {
        return res.render("user-data", {title: "Info usuário"});
    },
};

module.exports = UserController;