const ProductMotherboardController = {
    index: (req, res) => {
        return res.render("productMotherboard", {title: "Product Motherboard"});
    },
};

module.exports = ProductMotherboardController;