const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");

// aplicação de rotas
const homePageRoute = require("./src/routes/homePageRoute");
const admRoute = require("./src/routes/admRoute");
const userRoute = require("./src/routes/userRoute");
const productRoute = require("./src/routes/productRoute");

// Rota dos modelos
// const Product = require("./src/models/Product");

// Configura pasta estática para acesso externo
app.use(express.static(__dirname + "/public"));

// Configura template ejs
app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");

// Configura o methodOverride no express, transforma metodo http em outro. Ex: POST => PUT
app.use(methodOverride("_method"));

// Converte requisição (body) em objeto literal
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Preenche a propriedade cookies do objeto request
app.use(cookieParser());

// Usado para calcular o hash
app.use(session({ secret: "senha" }));

// Middleware global
app.use((req, res, next) => { next(); });

// Aplicação de rotas
app.use("/", homePageRoute);
app.use("/", admRoute);
//Verificar estas rotas, pois estão apresentnado erro.
app.use("/", userRoute);
app.use("/", productRoute);

app.use("/user", userRoute);
app.use("/product", productRoute);

// Error not found
app.use( (req, res) => { return res.status(404).render('not-found') });

app.listen(port, ()=>{ console.log("Estamos rodando em: http://localhost:" + port)});
