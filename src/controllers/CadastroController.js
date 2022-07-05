const CadastroController = {
    index: (req, res) => {
        return res.render("cadastro", {title: "Cadastro"});
    },
};

module.exports = CadastroController;