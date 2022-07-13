const CartShoppingController = {
    index: (req, res) => {
        return res.render("cartShopping", {title: "Cart"});
    },
};

module.exports = CartShoppingController;