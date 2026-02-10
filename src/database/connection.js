const Sequelize = require("sequelize");
const mysql = require("mysql2/promise"); // Driver para criar o banco
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 7144,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
};

// 1. Função para garantir que o banco 'betel' existe
async function ensureDatabaseExists() {
    try {
        const connection = await mysql.createConnection({
            ...dbConfig,
            ssl: { rejectUnauthorized: false }
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS betel;`);
        await connection.end();
        console.log("✅ Banco 'betel' pronto para uso!");
    } catch (err) {
        console.error("❌ Erro ao criar banco:", err.message);
    }
}

// 2. Configuração do Sequelize
const Connection = new Sequelize('betel', dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: "mysql",
    timezone: "-03:00",
    logging: false,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    }
});

// Executa a criação antes de autenticar
ensureDatabaseExists().then(() => {
    Connection.authenticate()
        .then(() => console.log("🚀 Gênesis conectado ao banco Betel com sucesso!"))
        .catch(err => console.log("❌ Erro Sequelize:", err.message));
});

module.exports = Connection;