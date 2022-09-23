
const fs = require("fs");
const path = require("path");

const productsJson = fs.readFileSync(path.join(__dirname, "..", "data", "products.json"), "utf-8")
const products = JSON.parse(productsJson);
// importando o sequelize para dentro do arquivo
const db = require("../config/sequelize");
// Chamando o modelo do product
const Product = require("../models/Product");
// Utilizando o operador do sequelize like, <>,<=,>= etc
const { Op } = require("sequelize");
const sequelize = require("sequelize");
const { check } = require("express-validator");
const ProdutoController = { 

    // Busca os pedidos que um usuário possui e listar os produtos desses pedidos
    index: async (req, res) => {
        // Lidaremos com promessas
        try {
            
            const products = await Product.findAll();
            console.log(products);
            // Retornando para a rota de index do produtos, com uma mensagem
            // res.status(200).json({ data: products, menssage: "Listado todos os produtos" });
            res.render("home-page",{products: products, title: "home"});
        } catch (error) {
            console.log(error)
        }

    },
    show: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await Product.findOne({
                // Buscando um parâmetro
                where: {
                    id: id,
                },
                // include: RequestsProducts,
            });
        //     const {marca} = req.query
            
        //     var produtos = products.filter((value)=> {
        //         if(value.marca === marca) { 
        //  return true}
        //         });
            return res.render("product-detail", { title: product.name, produto: product });

        } catch (error) {
            console.log(error);
            if (error.menssage === "PRODUCT_NOT_FOUND") {
                res.status(400).json({ message: "Produto não encontrado" });
            } else {
                res.status(400).json({ message: "Erro ao encontrar produto" });
            }

        }
    },
    store: async (req, res) => {
        const { name, category, brand, price, inventory, available, urlImage } = req.body;
        try {
            const products = await Product.create({
                name,
                category,
                brand,
                price,
                inventory,
                available,
                urlImage
            });
            console.log(products);
            res.status(201).json({ message: "Produto cadastrado com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Erro ao cadastrar o produto" });
        }
    },
    update: async (req, res) => {
        const { name, category, brand, price, inventory, available, urlImage } = req.body;
        const { id } = req.params;
        try {
            // Verificando os dados
            if (name && !category && !brand && !price && !inventory && !available && !urlImage) {
                throw Error("Nenhum dado para atualizar");
            }
            const products = await Product.update(
                {
                    name,
                    category,
                    brand,
                    price,
                    inventory,
                    available,
                    urlImage
                },
                {
                    where: { id },
                }
            );
            console.log(products);
            res.status(200).json({ message: "Produto atualizado com sucesso" });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Erro ao atualizar o produto" });
        }
    },
    destroy: async (req, res) => {
        const { id } = req.params;
        try {
            const products = await Product.destroy({ where: { id } });
            console.log(products);
            res.status(200).json({ message: "Produto deletado com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Erro ao deletar o produto" });
        }
    },
    cart: (req, res) => {
        return res.render("cart-shopping", { title: "Carrinho de compras" });
    },
    search: async (req, res) => {
            const {marca} = req.query
        try {
        var produtos = await Product.findAll({
            where: {
                brand: {[Op.like]:marca}
                
            },
         } ) ;
            

        } catch (error) {
            res.status(400).json({message:"Erro ao procurar produto"})
        }
    return res.render("product-listing", {title: "Lista de produtos", produtos:produtos}); }
    ,
        
    
    detail: (req, res) => {
        const { id } = req.params
        let produtoEncontrado = null
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === parseInt(id)) {
                produtoEncontrado = products[i]

            }

        }
        if (produtoEncontrado) {
            return res.render("product-detail", { title: "amd", produto: produtoEncontrado })
        }
        else {
            return res.status(404).render("not-found")

        }
    }  
        ,
    checking: async (req, res) => {
            console.log("qualquer mensagem muito loka")
        const { PrimeiroNome, UltimoNome, Usuario, Email, Endereco, Numero, Cidade, Estado, Cep, NomeCartao, numCartao, dataVenc, CVV } = req.body;
            const { id } = req.params;
            // try {
            //     // Verificando os dados
            //     const compra = await Request.create(
            //         {
            //             Endereco,
            //             Numero,
            //             Cidade,
            //             Estado,
            //             Cep,
            //         },
                    // );
                    return res.redirect('/')
            //     } catch (error) {
            //     console.log(error);
            //     res.status(400).json({ message: "Erro no Formulário" });
            // }
        },
    detailAmd: async (req,res) => {
        const AMD = req.body.AMD
        try {
        var produtosAMD = await Product.findAll({
            where: {
                brand: {[Op.like]:AMD}
                
            },
         } ) ;
            

        } catch (error) {
            res.status(400).json({message:"Produtos da AMD não encontrados"});
        }
        return res.render("brand-detail-amd", {title: "AMD | MyBrand's", produtosAMD:produtosAMD});
    },
    detailAsus: (req, res) => {
        return res.render("brand-detail-asus", { title: "ASUS | MyBrand's" })
    },
    detailGeil: (req, res) => {
        return res.render("brand-detail-geil", { title: "GEIL | MyBrand's" })
    },
    detailIntel: (req,res) => {
        return res.render("brand-detail-intel", {title: "Intel | MyBrand's"})
    },
    checkout: (req,res) => {
        return res.render("checkout-page", {title: "Página de pagamento"})
    }
}; 

module.exports = ProdutoController;