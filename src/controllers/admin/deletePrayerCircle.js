
const prayerCircle = require("../../models/prayerCircle");


async function deletePrayerCirlce(req,res){

    try{
        // Coleta o id que está Hidden la no front.
        const id = req.body.id;
        
        if(id){
            try{
                await prayerCircle.destroy({where:{id:id}});
                console.log("Evento deletado com sucesso!");
                return res.redirect("/admin/seepatios");

            }catch(error){
                console.log("Falha ao deletar evento");
                console.log(error);
                return res.redirect("/admin/seepatios");
            };

        }else{
            console.log("ID Inválido");
            return res.redirect("/admin/seepatios");
        };

    }catch(error){
        console.log("Erro ao excluir Evento");
        console.log(error);
        return res.redirect("/admin/dashboard");
    };
};

module.exports = {deletePrayerCirlce};

