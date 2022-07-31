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
    homeAdm: (req, res) => {
        return res.render("home-adm", {title: "Painel-Adm"});
    },
    login: (req, res) => {
        return res.render("login-adm", {title: "Login"});
    },
    adm: (req, res) => {
        return res.render("product-adm", {title: "Produtos-Adm", products });
    },
    viewProduct: (req, res) => {
        const {id} = req.params;
        const productResult = products.find((product) => product.id === parseInt(id));
        if(!productResult){
            return res.render("error", { title: "Ops!", message: "Produto não encontrado",});
        }
        return res.render("product-detail-adm", { title: "Visualizar produto", product: productResult });
    },
    createProduct: (req, res) => {
        return res.render("product-create", { title: "Cadastrar produto" });
    },
};

module.exports = AdmController;