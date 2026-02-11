

const patio = require("../../models/patio");

async function patioUpdateValue(req,res){

    try{
        const id = req.body.id;
        const value = req.body.value;
        if(id){
            
            try{
                await patio.update({
                    collected:value
                },{where:{id:id}});

                console.log("Sucesso ao atualizar valor do pátio");

                return res.redirect("/admin/dashboard");

            }catch(error){
                console.log("Erro ao atualizar pátio");
                console.log(error);
                return res.redirect("/admin/dashboard");
            }

        }else{
            console.log("Id do pátio Inválido");
            return res.redirect("/admin/dashboard");
        };

    }catch(error){
        console.log("Erro ao coletar dados");
        console.log(error);
        return res.redirect("/admin/dashboard");
    };




};

module.exports = {patioUpdateValue};