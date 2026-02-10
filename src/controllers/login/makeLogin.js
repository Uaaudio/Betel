const User = require ("../../models/user");
const {verifyUser} = require("../../middlewares/verifyUser");

async function makeLogin(req,res){

    try{
        const login = req.body.login;
        const password = req.body.password;
        
        if(login && password){
            // Minha função de tratamento de login.
           return await verifyUser(req,res,login,password);
            
        }else{
            console.log("Os campos estão vazios, por gentileza verifique");
            return res.redirect("/") // pagina de login novamente
        };

    }catch(error){

        console.log("Informações incompletas, por gentileza verifique");
        console.log(error);
        return res.redirect("/"); // pagina de login novamente
    };
};


module.exports = {makeLogin};