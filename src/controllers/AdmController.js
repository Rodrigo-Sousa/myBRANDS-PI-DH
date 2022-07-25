const AdmController = {
    login: (req, res) => {
        return res.render("login-adm", {title: "Login"});
    },
    adm: (req, res) => {
        return res.render("product-adm", {title: "Produtos"});
    },
};

module.exports = AdmController;