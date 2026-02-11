
const User = require("../../models");
const bcrypt = require("bcrypt");

async function editUser(req,res){

    try{
        
        const id = req.body.id;
        const name = req.body.name;
        var password = req.body.password;
        const email = req.body.email;

        if(id && password && email){
            
            try{
                // Busca o único usuario pelo Id.
                const user = await User.findOne({where:{id:id}});
    
                var password = await bcrypt.hash(password,10);
    
                await user.update({
                    name:name,
                    password:password,
                    email:email
                });

                console.log("Usuário Atualizado com Sucesso!");
                return res.redirect("/admin/dashboard");

            }catch(error){
                console.log("Erro ao buscar usuario e atualiza-lo");
                console.log(error);
                return res.redirect("/admin/dashboard");

            };

        }else{
            console.log("Dados Inválidos");
            console.log(error);
            return res.redirect("/admin/dashboard");
        };

    }catch(error){

        console.log("Entrada de dados vazia, por gentileza verificar");
        console.log(error);
        return res.redirect("/admin/dashboard");
    };

};

module.exports = {editUser}; 