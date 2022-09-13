
const fs = require("fs");
const products = require('../models/Product');

// Chamando o modelo do product
const products = require("../models/Product");
// Utilizando o operador do sequelize like, <>,<=,>= etc
const { Op } = require("sequelize");
const sequelize = require("sequelize");

const ProdutoController = {
    cart: (req, res) => {
        return res.render("cart-shopping", {title: "Carrinho de compras"});
    },
    index: (req, res) => {
        const {marca} = req.query
        var produtos = products.filter((value)=> {
            if(value.marca === marca) { 
            return true}
        }) 
        return res.render("product-listing", {title: "Lista de produtos",produtos:produtos});
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