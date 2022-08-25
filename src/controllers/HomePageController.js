
const fs = require("fs");
const path = require("path");
const productsJson = fs.readFileSync(path.join(__dirname, "..", "data", "products.json"), "utf-8")
const products = JSON.parse(productsJson);


const HomePageController = {
    index: (req, res) => {
        return res.render("home-page", {title: "Home", user: req.cookies.user, admin: req.cookies.admin, products:products});
    },
    show: (req,res) => {
        const {id} = req.params
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === parseInt(id)) {
                 return res.render("product-detail", {title: "amd"})
            }
            else {
                res.status(404).json({message:"não encontrado"})
            }



        }
    }
};

module.exports = HomePageController;