const express = require("express");
const app = express();
const PORT = 3001;

//importando e configurando o bodyparser.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })); // Para formulários comuns
app.use(bodyParser.json()); // Para se você enviar dados via JSON


// configura minhas variaveis de ambiente.
require("dotenv").config();

// Importando meu banco para sync
const Connection = require("./src/database/connection");

//const syncTables = require("./src/database/syncTables");

//importando minhas rotas.
const adminRoutes = require("./src/routes/adminRoutes");

app.use("/admin",adminRoutes);


app.listen(PORT,()=>{
    console.log("Aplicação rodando na porta: " + PORT);
});