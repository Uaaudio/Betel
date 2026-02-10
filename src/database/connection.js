const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
require('dotenv').config();

const dbUri = process.env.DB_URL;

let Connection;

if (dbUri) {
    // Configuração para PRODUÇÃO (Square Cloud com Certificados)
    Connection = new Sequelize(dbUri, {
        dialect: "mysql",
        timezone: "-03:00",
        logging: false,
        dialectOptions: {
            ssl: {
                // Carrega os arquivos que você recebeu
                // Certifique-se de que os nomes dos arquivos estão idênticos aos da sua pasta
                ca: fs.readFileSync(path.join(__dirname, "ca-certificate.crt")),
                cert: fs.readFileSync(path.join(__dirname, "certificate.pem")),
                key: fs.readFileSync(path.join(__dirname, "private-key.key")),
                rejectUnauthorized: true // Agora usamos true porque temos os certificados oficiais
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
    .then(() => console.log("🚀 Gênesis conectado com SSL Estrito!"))
    .catch(err => console.error("❌ Erro na conexão com certificados:", err));

module.exports = Connection;