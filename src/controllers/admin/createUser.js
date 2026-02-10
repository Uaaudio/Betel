const User = require("../../models/user");
const bcrypt = require("bcrypt");


async function createUser(req,res){


    try{
        const name = req.body.name;
        const password = req.body.password;
        const email = req.body.email;
        const role = req.body.role;

        if(name && password){

            const hashPassword = await bcrypt.hash(password,15); 

            try{
                await User.create({
                    name: name,
                    email: email,
                    password:hashPassword,
                    role:role
                });

                console.log("Usuário Registrado com sucesso!!");
                //return res.redirect("/admin/dashboard");


            }catch(error){
                
                console.log("Erro ao criar registrar usuario");
                return res.redirect("/admin/dashboard");

            };

        }else{
            console.log("Dados Inválidos, Insira novamente");
            return res.redirect("/admin/dashboard");

        };

    }catch(error){
        console.log("Falha ao receber dados, por gentileza insira novamente");
        return res.redirect("/admin/dashboard");
    };


};


module.exports = {createUser};