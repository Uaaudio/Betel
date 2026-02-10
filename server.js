const express = require("express");
const app = express();
const PORT = 80;

//importando e configurando o bodyparser.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })); // Para formulários comuns
app.use(bodyParser.json()); // Para se você enviar dados via JSON

// Carregando e configurando EJS.
const ejs = require("ejs");
app.set("view engine" , "ejs");
app.set("views","./src/views");

// importando e configurando o express-session.
const session = require("express-session");
const session = require('express-session');

app.use(session({
    secret: 'Jesus Cristo Salva',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, 
        maxAge: 3600000 
    }
}));

// pasta de arquivos estaticos.
app.use(express.static("public"));

// configura minhas variaveis de ambiente.
require("dotenv").config();

// Importando meu banco para sync.
const Connection = require("./src/database/connection");

const syncTables = require("./src/database/syncTables");

//importando minhas rotas.
const adminRoutes = require("./src/routes/adminRoutes");
const loginRoutes = require("./src/routes/loginRoutes");

app.get("/",(req,res)=>{
    return res.render("login");
});

app.use("/admin",adminRoutes);
app.use("/login",loginRoutes);


app.listen(PORT,()=>{
    console.log("Aplicação rodando na porta: " + PORT);
});