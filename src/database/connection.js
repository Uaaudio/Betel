const Sequelize = require("sequelize");


const Connection = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{

    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT

});

Connection.authenticate()
    .then(()=>{
        console.log("Banco conectado com sucesso!")
    }).catch((error)=>{
        console.log("falha ao conectar ao banco de dados");
        console.log(error);
    });


module.exports = Connection