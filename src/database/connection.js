const Sequelize = require("sequelize");
require('dotenv').config();

// Se existir DB_URL, usamos ela. Caso contrário, usamos as variáveis separadas.
const Connection = process.env.DB_URL 
    ? new Sequelize(process.env.DB_URL, {
        dialect: "mysql",
        timezone: "-03:00",
        logging: false,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    })
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        dialect: "mysql",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        timezone: "-03:00",
        logging: false
    });

Connection.authenticate()
    .then(() => {
        console.log("🚀 Banco conectado com sucesso!");
    }).catch((error) => {
        console.log("falha ao conectar ao banco de dados");
        console.log(error);
    });

module.exports = Connection;