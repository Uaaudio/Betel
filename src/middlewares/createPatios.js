const patio = require("../models/patio");
const cron = require("node-cron");

// Função independente (sem req, res) para o banco
async function autoCreatePatios() {
    try {
        const date = new Date();
        const day = date.getDate(); // Pegando o dia do mês (1-31)
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        await patio.create({
            day: day,
            month: month,
            year: year,
            member: "AUTOMÁTICO", // Ajuda você a saber que foi o sistema que criou
            collected: 0
        });

        console.log(`[CRON] Sucesso: Pátio do dia ${day}/${month} criado automaticamente.`);
        
    } catch (error) {
        console.log("❌ [CRON ERROR] Falha ao criar registro automático:");
        console.log(error);
    }
};

// Agendado para todo Sábado (6) às 09:00
cron.schedule("0 9 * * 6", autoCreatePatios, {
    scheduled: true,
    timezone: "America/Sao_Paulo"
});