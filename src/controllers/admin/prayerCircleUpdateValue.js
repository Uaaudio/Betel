

const prayerCircle = require("../../models/prayerCircle");

async function prayerCirlceUpdateValue(req,res){

    try{
        const id = req.body.id;
        const value = req.body.value;
        if(id){
            
            try{
                await prayerCircle.update({
                    collected:value
                },{where:{id:id}});

                console.log("Sucesso ao atualizar valor do circulo de oração");

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

module.exports = {prayerCirlceUpdateValue};