require("dotenv").config();
const database = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "MySecurity_13&*#",
  database: process.env.DB_DATABASE || "ecommerce_mybrands_db",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",
};

module.exports = database;
