const Sequelize = require("sequelize");
require('dotenv').config();

const dbUri = process.env.DB_URL;

let Connection;

if (dbUri && typeof dbUri === 'string') {
    // Configuração para SQUARE CLOUD (Com SSL Obrigatório)
    Connection = new Sequelize(dbUri, { 
        dialect: "mysql", 
        timezone: "-03:00", 
        logging: false,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    });
} else {
    // Configuração para seu NOTEBOOK (Local)
    Connection = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PASS, 
        {
            host: process.env.DB_HOST,
            dialect: "mysql",
            timezone: "-03:00",
            logging: false
        }
    );
}

Connection.authenticate()
    .then(() => {
        console.log("🚀 Gênesis conectado ao banco com sucesso!");
    })
    .catch((error) => {
        console.error("❌ Erro ao conectar no banco:", error);
    });

module.exports = Connection;