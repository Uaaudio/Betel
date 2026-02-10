const Connection = require("./connection");
const User = require("../models/user");
const Patio = require("../models/patio");
const prayerCircle = require("../models/prayerCircle");

// force: false evita que o banco seja apagado a cada restart
Connection.sync({ force: false }).then(() => {
    console.log("🚀 Tabelas sincronizadas no banco Betel!");
}).catch((error) => {
    console.log("❌ Falha ao sincronizar as tabelas:");
    console.log(error.message); // Usar .message limpa o log para você ver o erro real
});