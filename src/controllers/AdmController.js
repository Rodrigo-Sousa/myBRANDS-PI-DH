const fs = require("fs");
const path = require("path");
const bcrypt = require("../helpers/bcrypt");
const Product = require("../models/Product");
const products = [
  {
    id: 1,
    modelo: "AMD Radeon RX 550, 4GB, Preto",
    marca: "AMD",
    categoria: "Placa de vídeo",
    estoque: 12,
  },
  {
    id: 2,
    modelo: "Redragon Cobra, Chroma RGB, 12400DPI, 7 Botões, Preto",
    marca: "Redragon",
    categoria: "Mouse Gamer",
    estoque: 15,
  },
  {
    id: 3,
    modelo: "Cloud Stinger, Drivers 50mm, Múltiplas Plataformas, P2 e P3",
    marca: "HyperX",
    categoria: "Headset Gamer",
    estoque: 18,
  },
];

const AdmController = {
  login: (req, res) => {
    return res.render("login-adm", { title: "Login" });
  },
  homeAdm: (req, res) => {
    return res.render("home-adm", { title: "Painel-Adm", user: req.cookies.user, admin: req.cookies.admin });
  },
  adm: async (req, res) => {
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
      return res.render("product-adm", { title: "Produtos-Adm", products: products, user: req.cookies.user, admin: req.cookies.admin });
    } catch (error) {
      console.log(error)
    }

  },
  viewProduct: (req, res) => {
    const { id } = req.params;
    const productResult = products.find((product) => product.id === parseInt(id));
    if (!productResult) {
      return res.render("error", { title: "Ops!", message: "Produto não encontrado", });
    }
    return res.render("product-detail-adm", { title: "Visualizar produto", product: productResult });
  },
  createProduct: (req, res) => {
    return res.render("product-create", { title: "Cadastrar produto" });
  },
  store: (req, res) => {
    const { modelo, marca, categoria, estoque } = req.body;
    const newProduct = { id: products.length + 1, modelo, marca, categoria, estoque, };
    products.push(newProduct)
    return res.render("success", { title: "Sucesso!", message: "Produto criado com sucesso!" });
  },
  edit: (req, res) => {
    const { id } = req.params;
    const productResult = products.find((product) => product.id === parseInt(id));
    if (!productResult) {
      return res.render("error", { title: "Ops!", message: "Produto não encontrado!" });
    }
    return res.render("product-edit", { title: "Editar produto", product: productResult });
  },
  update: (req, res) => {
    const { id } = req.params;
    const { modelo, marca, categoria, estoque } = req.body;
    const productResult = products.find((product) => product.id === parseInt(id));
    if (!productResult) {
      return res.render("error", { title: "Ops!", message: "Produto não encontrado" });
    }

    const updateProduct = productResult;
    if (modelo) updateProduct.modelo = modelo;
    if (marca) updateProduct.marca = marca;
    if (categoria) updateProduct.categoria = categoria;
    if (estoque) updateProduct.estoque = estoque;

    return res.render("success", { title: "Produto atualizado", message: `Produto da marca ${updateProduct.marca} foi atualizado`, });
  },
  delete: (req, res) => {
    const { id } = req.params;
    const productResult = products.find((product) => product.id === parseInt(id));
    if (!productResult) {
      return res.render("error", { title: "Ops!", message: "Produto não encontrado" });
    }
    return res.render("product-delete", { title: "Deletar produto", product: productResult });
  },
  destroy: (req, res) => {
    const { id } = req.params;
    const result = products.findIndex((product) => product.id === parseInt(id));
    if (result === -1) {
      return res.render("error", { title: "Ops!", message: "Produto não encontrado" });
    }
    products.splice(result, 1)
    return res.render("success", { title: "Produto deletado", message: "Produto deletado com sucesso!" });
  },
};

module.exports = AdmController;