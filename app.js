const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override");

// aplicação de rotas
const homePageRoute = require("./src/routes/homePageRoute");
const admRoute = require("./src/routes/admRoute");
const userRoute = require("./src/routes/userRoute");
const productRoute = require("./src/routes/productRoute");


app.use(express.static(__dirname + "/public"));

// Configura template ejs
app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");

// Configura o methodOverride no express
app.use(methodOverride("_method"));

app.use(express.json());

// Converte requisição para formado que o json aceita
app.use(express.urlencoded({ extended: false }));

// aplicação de rotas
app.use("/", homePageRoute);
app.use("/", admRoute);
app.use("/", userRoute);
app.use("/", productRoute);

// Error not found
app.use( (req, res) => {
    return res.status(404).render('not-found');
});

app.listen(port, ()=>{
    console.log("Estamos rodando na porta " + port)
});