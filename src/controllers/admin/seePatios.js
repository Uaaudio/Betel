
const patio = require("../../models/patio");


async function patiosOfmonth(req,res){

    try{

        const date = new Date();
        const month = date.getMonth() + 1 ;
        
        if(month){
            try{

                const patios = await patio.findAll({where:{month:month}});
                if(patios.length > 0){
                    
                    console.log("Cansulta bem sucedida, renderizando pagina");
                    const title = "Patios"
                    return res.render("monthEvents",{patios,title});
                }else{
                    console.log("Falha na busca, retornando pro dashboard");
                    return res.redirect("/admin/dashboard");
                };

            }catch(error){
                console.log("Falha ao consultar os dados");
                console.log(error);
                return res.redirect("/admin/dashboard");
            };
        }else{
            console.log("Mês atual nulo");
            return res.redirect("/admin/dashboard");
        };

    }catch(error){
        console.log("Campos vazios, confira por gentileza");
        console.log(error);
        return res.redirect("/admin/dashboard");
    };
    
};


module.exports = {patiosOfmonth};
