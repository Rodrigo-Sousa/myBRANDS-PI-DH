const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./src/routes/userRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);

app.listen(port, () => {
  console.log("Estamos rodando na porta: " + port);
});
