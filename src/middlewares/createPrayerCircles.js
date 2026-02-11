const prayerCircle = require("../models/prayerCircle");
const cron = require("node-cron");

// Função independente (sem req, res) para o banco
async function autoCreatePrayerCircles() {
    try {
        const date = new Date();
        const day = date.getDate(); 
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        await prayerCircle.create({
            day: day,
            month: month,
            year: year,
            member: "AUTOMÁTICO",
            collected: 0
        });

        console.log(`[CRON] Sucesso: Círculo de Oração do dia ${day}/${month} criado.`);
        
    } catch (error) {
        console.log("❌ [CRON ERROR] Falha ao criar registro de Oração:");
        console.log(error);
    }
};
autoCreatePrayerCircles();

// Agendado para toda QUARTA-FEIRA (3) às 09:00
cron.schedule("0 9 * * 3", autoCreatePrayerCircles, {
    scheduled: true,
    timezone: "America/Sao_Paulo"
});