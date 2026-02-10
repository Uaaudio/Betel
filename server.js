const express = require("express");
const app = express();
const PORT = 3001;

//importando e configurando o bodyparser.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })); // Para formulários comuns
app.use(bodyParser.json()); // Para se você enviar dados via JSON

// Carregando e configurando EJS.
const ejs = require("ejs");
app.set("view engine" , "ejs");
app.set("views","./src/views");

// pasta de arquivos estaticos.
app.use(express.static("public"));

// configura minhas variaveis de ambiente.
require("dotenv").config();

// Importando meu banco para sync.
const Connection = require("./src/database/connection");
Connection.sync({ force: true }).then(() => {
    console.log("🚀 Tabelas sincronizadas no banco Betel!");
}).catch((error) => {
    console.log("❌ Falha ao sincronizar as tabelas:");
    console.log(error.message); // Usar .message limpa o log para você ver o erro real
});



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