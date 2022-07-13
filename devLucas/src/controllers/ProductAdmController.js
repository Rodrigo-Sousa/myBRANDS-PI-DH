const ProductAdmController = {
    index: (req, res) => {
        return res.render("productAdm", {title: "Product Adm"});
    },
};

module.exports = ProductAdmController;