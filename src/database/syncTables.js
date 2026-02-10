const Connection = require("./connection");
const User = require("../models/user");
const Patio = require("../models/patio");
const prayerCircle = require("../models/prayerCircle");
const {seedAdmin} = require("../middlewares/createAdmin");

// force: false evita que o banco seja apagado a cada restart
Connection.sync({alter: true}).then(() => {
    console.log("🚀 Tabelas sincronizadas no banco Betel!");
    seedAdmin();
}).catch((error) => {
    console.log("❌ Falha ao sincronizar as tabelas:");
    console.log(error.message); // Usar .message limpa o log para você ver o erro real
});