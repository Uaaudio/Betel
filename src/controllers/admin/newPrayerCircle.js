const prayerCircle = require("../../models/prayerCircle");


// Função independente (sem req, res) para o banco
async function createPrayerCircle(req,res) {
    try {
        const date = new Date();
        const day = date.getDate(); // Pegando o dia do mês (1-31)
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        await prayerCircle.create({
            day: day,
            month: month,
            year: year,
            member: "AUTOMÁTICO", // Ajuda você a saber que foi o sistema que criou
            collected: 0
        });

        console.log(`Sucesso: Circulo de oração do dia ${day}/${month} criado com sucesso.`);
        return res.redirect("/admin/seeprayercircles");


    } catch (error) {
        console.log("Falha ao criar registro: ");
        console.log(error);
        return res.redirect("/admin/seeprayercircles");
    };
};

module.exports = {createPrayerCircle};