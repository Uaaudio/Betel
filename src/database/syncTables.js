const Connection = require("./connection");
const User = require("../models/user");
const Patio = require("../models/patio");
const prayerCircle = require("../models/prayerCircle");

Connection.sync({force:true}).then(()=>{
    console.log("Sincronizado com sucesso!");
}).catch((error)=>{
    console.log("Falha ao sincronizar");
    console.log(error);
});
