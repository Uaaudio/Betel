const Sequelize = require("sequelize");
require('dotenv').config(); // Garante que ele leia o arquivo .env

// Tenta pegar a URL completa da Square Cloud
const DB_URL = process.env.DB_URL;

let Connection;

if (DB_URL) {
    // Conexão para Square Cloud usando a URL completa
    Connection = new Sequelize(DB_URL, {
        dialect: "mysql",
        timezone: "-03:00", // Horário de Salvador
        logging: false
    });
} else {
    // Conexão para o seu Notebook (Local)
    Connection = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PASS, 
        {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT || 3306,
            dialect: "mysql",
            timezone: "-03:00",
            logging: false
        }
    );
}

Connection.authenticate()
    .then(() => {
        console.log("🚀 Conexão estabelecida com sucesso!");
    })
    .catch((error) => {
        console.error("❌ Erro ao conectar no banco de dados:", error);
    });

module.exports = Connection;