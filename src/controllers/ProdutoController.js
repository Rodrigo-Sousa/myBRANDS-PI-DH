
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
const ProdutoController = { 

    // Busca os pedidos que um usuário possui e listar os produtos desses pedidos
    // index: async (req, res) => {
    //     // Lidaremos com promessas
    //     try {
    //     // Fazendo um index sem o filtro. Busca por todos os usuários
    //     const products = await Product.findAll();
    //         console.log(products);
    //         // Retornando para a rota de index do produtos, com uma mensagem
    //         res.status(200).json({ data: products, menssage: "Listado todos os produtos" });

    //     } catch (error) {
    //         console.log(error)
    //     }

    // },
    // show: async (req, res) => {

    //     // Id o usuário que iremos buscar
    //     const { id } = req.params;
    //     try {

    //         const product = await db.query(`SELECT * FROM products WHERE id = ${id}`, {
    //             type: sequelize.QueryTypes.SELECT,
    //         });
    //         // Validando o retorno pro usuário
    //         if (product.length > 0) {
    //             // Mensagem de retorno
    //             res.status(200).json({ data: products[0] });
    //         } else {
    //             res.status(400).json({ data: {}, message: "Nenhum produto encontrado" });
    //         }

    //     } catch (error) {
    //         console.log(error);
    //         res.status(400).json({ message: "Erro ao encontrar o produto!" });
    //     }
    // },
    // store: async (req, res) => {
    //     const { name, email, senha, birthdate, cpf, picture, phone, celphone, bredIn, changedIn } = req.body;
    //     try {
    //         const users = await db.query("INSERT INTO users (name, email, senha, birthdate, cpf, picture, phone, celphone, bredIn, changedIn) VALUES (:name, :email, :senha, :birthdate, :cpf, :picture, :phone, :celphone, :bredIn, :changedIn)", {
    //             type: sequelize.QueryTypes.INSERT,
    //         });
    //         console.log(users);
    //         res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    //     } catch (error) {
    //         console.log(error);
    //         res.status(400).json({ message: "Erro ao criar usuário" });
    //     }
    // },
    // update: async (req, res) => {
    //     // Realizando a validação
    //     if (!name && !email && !senha && !birthdate && !cpf && !picture && !phone && !celphone && !bredIn && !changedIn) {
    //         throw Error("Nenhum dado para atualizar.");
    //     }
    //     let query = "UPDATE users SET "
    //     if (name) query += "name = :name";
    //     if (email) {
    //         if (name) query += ", ";
    //         query += "email = :email";
    //     }
    //     if (senha) {
    //         if (name || email) query += ", ";
    //         query += "senha = :senha";
    //     }
    //     if (birthdate) {
    //         if (name || email || senha) query += ", ";
    //         query += "birthdate = :birthdate";
    //     }
    //     if (cpf) {
    //         if (name || email || senha || birthdate) query += ", ";
    //         query += "cpf = :cpf";
    //     }
    //     if (picture) {
    //         if (name || email || senha || birthdate || cpf) query += ", ";
    //         query += "picture = :picture";
    //     }
    //     if (celphone) {
    //         if (name || email || senha || birthdate || cpf || picture) query += ", ";
    //         query += "celphone = :celphone";
    //     }
    //     if (bredIn) {
    //         if (name || email || senha || birthdate || cpf || picture || celphone) query += ", ";
    //         query += "bredIn = :bredIn";
    //     }
    //     if (changedIn) {
    //         if (name || email || senha || birthdate || cpf || picture || celphone || bredIn) query += ", ";
    //         query += "changedIn = :changedIn";
    //     }

    //     query += " WHERE id = :id"
    //     const { name, email, senha, birthdate, cpf, picture, phone, celphone, bredIn, changedIn } = req.body;
    //     const { id } = req.params;
    //     try {
    //         const users = await db.query("UPDATE users SET name = :name, email = :email, senha = :senha, birthdate = :birthdate, cpf = :cpf, picture = :picture, phone = :phone, celphone = :celphone, bredIn = :bredIn, changedIn = :changedIn WHERE id = :id",
    //             {
    //                 type: sequelize.QueryTypes.UPDATE,
    //             },
    //             {
    //                 where: { id },
    //             }
    //         );
    //         console.log(users);
    //         res.status(200).json({ message: "Usuário atualizado com sucesso" });
    //     } catch (error) {
    //         console.log(error);
    //         res.status(400).json({ message: "Erro ao atualizar usuário" });
    //     }
    // },
    // destroy: async (req, res) => {
    //     const { id } = req.params;
    //     try {
    //         const users = await db.query(`DELETE FROM users WHERE id = ${id}`, {
    //             typeof: sequelize.QueryTypes.DELETE,
    //         });
    //         console.log(users);
    //         res.status(200).json({ message: "Usuário deletado com sucesso!" });
    //     } catch (error) {
    //         console.log(error);
    //         res.status(400).json({ message: "Erro ao deletar usuário" });
    //     }
    // },
    index: async (req, res) => {
        // Lidaremos com promessas
        try {
            // const products = await db.query(
            //     // Recebe 2 parâmetros, uma string e o segundo um objeto
            //     "SELECT * FROM products;",{
            //         type: sequelize.QueryTypes.SELECT,

            //     }
            // );
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
            // console.log(product);
            // if (users.length === 0) {
            //   // Faz o código parar
            //   throw Error("USER_NOT_FOUND");
            // }
            // res.status(200).json({ data: products });
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
    // destroy: async (req, res) => {
    //     const { id } = req.params;
    //     try {
    //         const products = await Product.update({ available: 1 }, { where: { id } });
    //         console.log(products);
    //         res.status(200).json({ message: "Produto desativado com sucesso!" });
    //     } catch (error) {
    //         console.log(error);
    //         res.status(400).json({ message: "Erro ao desativar o produto" });
    //     }
    // },

    cart: (req, res) => {
        return res.render("cart-shopping", { title: "Carrinho de compras" });
    },
    // index: (req, res) => {
    //     const {marca} = req.query
    //     console.log(marca)
    //     var produtos = products.filter((value)=> {
    //         if(value.marca === marca) { 
    //         return true}
    //     }) 
    //     return res.render("product-listing", {title: "Lista de produtos", produtos:produtos});
    // },
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
    detailAmd: (req,res) => {
        return res.render("brand-detail-amd", {title: "AMD | MyBrand's"})
    },
    detailAmd: (req, res) => {
        return res.render("brand-detail-amd", { title: "AMD | MyBrand's" })
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
        return res.render("Checkout-page", {title: "Página de pagamento"})
    }
}; 

module.exports = ProdutoController;