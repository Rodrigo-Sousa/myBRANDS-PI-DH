const express = require("express");
const app = express();
const port = 3000;
//const methodOverride = require("method-override");

/* Route */
const homePageRoute = require("./src/routes/homePageRoute");
const cadastroRoute = require("./src/routes/cadastroRoute");
const cartShoppingRoute = require("./src/routes/cartShoppingRoute");
const loginRoute = require("./src/routes/loginRoute");
const productAdmRoute = require("./src/routes/productAdmRoute");
const productListingRoute = require("./src/routes/productListingRoute");
const productMotherboardRoute = require("./src/routes/productMotherboardRoute.js");
const usersRoute = require("./src/routes/usersRoute");
const loginUserRoute = require("./src/routes/loginUserRoute");


app.use(express.static(__dirname + "/public"));

// Configura template ejs
app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");

// Configura o methodOverride no express
//app.use(methodOverride("_method"));

app.use(express.json());

// Converte requisição para formado que o json aceita
app.use(express.urlencoded({ extended: false }));

/* Use Route */
app.use("/", homePageRoute);
app.use("/cadastro", cadastroRoute);
app.use("/cartShopping", cartShoppingRoute);
app.use("/login", loginRoute);
app.use("/productAdm", productAdmRoute);
app.use("/productListing", productListingRoute);
app.use("/productMotherboard", productMotherboardRoute);
app.use("/users", usersRoute);
app.use("/loginUser", loginUserRoute);


app.listen(port, ()=>{
    console.log("Estamos rodando na porta" + port)
});