const AdmController = {
    login: (req, res) => {
        return res.render("loginAdm", {title: "Login"});
    },
    adm: (req, res) => {
        return res.render("productAdm", {title: "Produtos"});
    },
};

module.exports = AdmController;