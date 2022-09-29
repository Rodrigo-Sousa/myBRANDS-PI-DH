const fs = require("fs");
const path = require("path");
const bcrypt = require("../helpers/bcrypt");
const Product = require("../models/Product");

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
      const products = await Product.findAll();
      console.log(products);

      return res.render("product-adm", { title: "Produtos-Adm", products: products, user: req.cookies.user, admin: req.cookies.admin });
    } catch (error) {
      console.log(error)
    }

  },
  viewProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findOne({
        // Buscando um parâmetro
        where: {
          id: id,
        },
        // include: RequestsProducts,
      });
      return res.render("product-detail-adm", { title: "Visualizar produto", product: product,user: req.cookies.user, admin: req.cookies.admin });

    } catch (error) {
      console.log(error);
      if (error.menssage === "PRODUCT_NOT_FOUND") {
        return res.render("error", { title: "Ops!", message: "Produto não encontrado", });
      } else {
        res.status(400).json({ message: "Erro ao encontrar produto" });
      }

    }

  },
  createProduct: (req, res) => {
    return res.render("product-create", { title: "Cadastrar produto", user: req.cookies.user, admin: req.cookies.admin});
  },
  store: async (req, res) => {
    const { name, category, brand, price, inventory, available, urlImage } = req.body;
    try {
      const product = await Product.create({
        name,
        category,
        brand,
        price,
        inventory,
        available,
        urlImage
      });
      console.log(product);
      return res.render("success", { title: "Sucesso!", newProduct: product, user: req.cookies.user, admin: req.cookies.admin, message: "Produto criado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Erro ao cadastrar o produto" });
    }
  },
  edit: async (req, res) => {
    const { id } = req.params;

    try {

      const product = await Product.findOne({
        // Buscando um parâmetro
        where: {
          id: id,
        },
        // include: RequestsProducts,
      });
      console.log(product);
      return res.render("product-edit", { title: "Editar produto", product: product, user: req.cookies.user, admin: req.cookies.admin});
    } catch (error) {
      console.log(error);
      return res.render("error", { title: "Ops!", message: "Produto não encontrado!" });
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
      const product = await Product.update(
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
      console.log(product);
      return res.render("success", { title: "Produto atualizado", user: req.cookies.user, admin: req.cookies.admin, message: `Produto da marca ${name} foi atualizado`, });
    } catch (error) {
      console.log(error);
      return res.render("error", { title: "Ops!", message: "Produto não encontrado" });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    // const { name, category, brand, price, inventory, available, urlImage } = req.body;
    try {
      const product = await Product.findOne({
        // Buscando um parâmetro
        where: {
          id: id,
        },
      });
      console.log(product);
      return res.render("product-delete", { title: "Deletar produto", product: product, user: req.cookies.user, admin: req.cookies.admin });
    } catch (error) {
      console.log(error);
      return res.render("error", { title: "Ops!", message: "Produto não encontrado" });
    }
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.destroy({ where: { id } });
      console.log(product);
      // res.status(200).json({ message: "Produto deletado com sucesso!" });
      return res.render("success", { title: "Produto deletado", product: product, user: req.cookies.user, admin: req.cookies.admin, message: "Produto deletado com sucesso!" });
    } catch (error) {
      console.log(error);
      // res.status(400).json({ message: "Erro ao deletar o produto" });
      return res.render("error", { title: "Ops!", message: "Produto não encontrado" });
    }
  }
};

module.exports = AdmController;