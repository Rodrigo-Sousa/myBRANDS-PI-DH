const AdmController = {
    login: (req, res) => {
        return res.render("login-adm", {title: "Login adm"});
    },
    adm: (req, res) => {
        return res.render("product-adm", {title: "Produtos adm"});
    },
};

module.exports = AdmController;