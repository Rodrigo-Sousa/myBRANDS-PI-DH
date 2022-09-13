
const fs = require("fs");
const path = require("path");
const productsJson = fs.readFileSync(path.join(__dirname, "..", "data", "products.json"), "utf-8")
const products = JSON.parse(productsJson);


const HomePageController = {
    index: (req, res) => {
        return res.render("home-page", { title: "Home", user: req.cookies.user, admin: req.cookies.admin, products: products, id: req.params.id });
    },
   
};

module.exports = HomePageController;