const User = require("../../models/user");

async function deleteUser(req,res){

    try{


        const adminLoggado = (req.session.user ? req.session.user.id : null);

        const id = req.body.id;
        if(id && id != adminLoggado){

            try{
                //vai deletar o usuario que corresponde aquele Id.
                await User.destroy({where:{id:id}});
                console.log("usuário deletado com sucesso!");
                
                return res.redirect("/admin/dashboard");

            }catch(error){
                console.log("Erro ao excluir usuário");
                console.log(error);
                return res.redirect('/admin/dashboard');
            }   

        }else{
            console.log("Id de usuario inválido");
            return res.redirect("/admin/dashboard");
        }
    }catch(error){
        
        console.log("Falha ao obter id");
        console.log(error);
        return res.redirect("/admin/dashboard");
    };

};


module.exports = {deleteUser};