const ProdutoController = {
    cart: (req, res) => {
        return res.render("cartShopping", {title: "Carrinho de compras"});
    },
    listing: (req, res) => {
        return res.render("productListing", {title: "Lista de produtos"});
    },
    detail: (req, res) => {
        return res.render("productDetail", {title: "Detalhe do produto"});
    },
};

module.exports = ProdutoController;