
const User = require ("../models/user");
const bcrypt = require('bcrypt');

async function verifyUser(req,res,login,password,next){

    try{

        const user = await User.findOne({
            where:{
                email:login
            }});

        if(user){
            const match = await bcrypt.compare(password,user.password);
        
            if (match){

                req.session.user = {
                    id: user.id,
                    name:user.name,
                    role:user.role

                };

                // Força o save da sessão.
                req.session.save(()=>{
                    console.log("Sessão salva com sucesso");
                    return res.redirect("/admin/dashboard");
                })

            }else{
                
                // caso a senha seja incorreta ele entra aqui
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