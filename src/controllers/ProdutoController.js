
const fs = require("fs");
const path = require("path");
const productsJson = fs.readFileSync(path.join(__dirname, "..", "data", "products.json"), "utf-8")
const products = JSON.parse(productsJson);

const db = require("../config/sequelize");
const { Op } = require("sequelize");
const sequelize = require("sequelize");
const ProdutoController = {

     // Busca os pedidos que um usuário possui e listar os produtos desses pedidos
  index: async (req, res) => {
    // Lidaremos com promessas
    try {
      const products = await db.query(
          // Recebe 2 parâmetros, uma string e o segundo um objeto
          "SELECT * FROM products;",{
              type: sequelize.QueryTypes.SELECT,

          }
      );
      console.log(products);
      // Retornando para a rota de index do produtos, com uma mensagem
    //   res.status(200).JSON({data: products, menssage: "Listado todos os produtos"});

  } catch (error){
      console.log(error)
  }

  },

    cart: (req, res) => {
        return res.render("cart-shopping", {title: "Carrinho de compras"});
    },
    listing: (req, res) => {
        return res.render("product-listing", {title: "Lista de produtos"});
    },
    detail: (req, res) => {
       const { id } = req.params
        let produtoEncontrado = null
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === parseInt(id)) {
                produtoEncontrado = products[i]

            }

        }
        if (produtoEncontrado) {
            return res.render("product-detail", { title: "amd",produto:produtoEncontrado })
        }
        else {
           return res.status(404).render("not-found")

        }
    }
        
    ,
    detailAmd: (req,res) => {
        return res.render("brand-detail-amd", {title: "AMD | MyBrand's"})
    },
    detailAsus: (req,res) => {
        return res.render("brand-detail-asus", {title: "ASUS | MyBrand's"})
    },
    detailGeil: (req,res) => {
        return res.render("brand-detail-geil", {title: "GEIL | MyBrand's"})
    },
    detailIntel: (req,res) => {
        return res.render("brand-detail-intel", {title: "Intel | MyBrand's"})
    }
};

module.exports = ProdutoController;