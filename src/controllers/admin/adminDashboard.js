const User = require("../../models/user");
const Patio = require("../../models/patio");
const prayerCircle = require("../../models/prayerCircle");

async function adminDashboard(req,res) {
    
    try{
        
        const userLogged = req.session.user;

        //coleta a data atual da chamada da função.
        const today = new Date();
        const month = today.getMonth() + 1;

        // mostra o total de usuarios do sistema.
        const totalUsers = await User.count();
        // Mostra o total de Patios que foram realizados no mês atual.
        const totalPatios = await Patio.count({where:{month:month}});
        // Mostra o total de circulos de oração do mês atual.
        const totalPrayerCircles = await prayerCircle.count({where:{month:month}});

        const totalCollectedPatios = await Patio.sum("collected",{where:{month:month}});
        const totalCollectedPrayerCircles = await prayerCircle.sum("collected",{where:{month:month}});

        const users = User.findAll();
        console.log("Sucesso ao consultar os dados");
        
        try{

            // Apenas um log...
            console.log("Dasboard Carregado com sucesso");
            
            // Renderizando a pagina junto com as variáveis que precisamos.
            return res.render("dashboard",{
                totalUsers,
                totalPatios,
                totalPrayerCircles,
                totalCollectedPatios,
                totalCollectedPrayerCircles,
                userLogged,
                users
            });
            

        }catch(error){

            console.log("Erro ao carregar o dashboard");
            console.log(error);
            return res.redirect("/");
        };
    
    }catch(error){

        console.log("Erro ao consultar dados");
        console.log(error);
        return res.redirect("/")

    };

};

module.exports = {adminDashboard};