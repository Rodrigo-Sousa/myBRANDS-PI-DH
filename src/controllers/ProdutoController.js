const ProdutoController = {
    cart: (req, res) => {
        return res.render("cart-shopping", {title: "Carrinho de compras"});
    },
    listing: (req, res) => {
        return res.render("product-listing", {title: "Lista de produtos"});
    },
    detail: (req, res) => {
        return res.render("product-detail", {title: "Detalhe do produto"});
    },
    detailAmd: (req,res) => {
        return res.render("brand-detail-amd", {title: "AMD | MyBrand's"})
    },
    detailAsus: (req,res) => {
        return res.render("brand-detail-asus", {title: "ASUS | MyBrand's"})
    }
};

module.exports = ProdutoController;