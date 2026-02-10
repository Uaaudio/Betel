
const User = require ("../models/user");
const bcrypt = require('bcrypt');

// Função para verificar o usuario.
async function verifyUser(req,res,login,password,next){

    try{

        // procura um unico usuario pelo login.

        const user = await User.findOne({
            where:{
                email:login
            }});

        if(user){
            const match = await bcrypt.compare(password,user.password);
            
            // se a senha corresponde corretamente ele entra.
            if (match){

                // cria o cookie da sessão mandando os dados do user pro navegador.
                req.session.user = {
                    id: user.id,
                    name:user.name,
                    role:user.role

                };

                // Força o save da sessão nos cookies.
                return req.session.save((error)=>{

                    if(error){
                        console.log("Falha ao salvar a sessão");
                        res.redirect("/");
                    }else{
                        console.log("Sessão realizada com sucesso!!");
                        res.redirect("/admin/dashboard");
                    };
                   
                });
                

            }else{

                console.log("Senha incorreta, acesso negado.");
                return res.redirect("/");
            };
            
        }else{
            console.log("Usuário Inexistente");
            return res.redirect("/");
        }
        

    }catch(error){
        console.log("falha ao consultar login.");
        return res.redirect("/");

    };

};


module.exports = {verifyUser};