const productValidator = {
  storeValidator: (req, res, next) => {
    const { modelo, marca, categoria, estoque } = req.body;
    if (!modelo || !marca || !categoria || !estoque) {
      return res.render("product-create", { title: "Cadastrar produto", error: { message: "Preencha todos os campos!" } });
    }
    next();
  },
};

module.exports = productValidator;