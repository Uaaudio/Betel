const User = require("../models/user"); // Ajuste o caminho para o seu model de User
const bcrypt = require("bcrypt"); // Se você usa bcrypt para senhas

async function seedAdmin() {
    try {
        // Verifica se já existe um Admin para não duplicar
        const adminExists = await User.findOne({ where: { email: "admin@betel.com" } });

        if (!adminExists) {
            // Se você usa hash de senha (recomendado), encripte aqui
            const hashedPassword = await bcrypt.hash("sua_senha_segura_aqui", 10);

            await User.create({
                nome: "Administrador Betel",
                email: "admin@betel.com",
                senha: hashedPassword,
                cargo: "admin" // Supondo que você tenha esse campo no model
            });

            console.log("✅ Usuário Admin criado com sucesso!");
        } else {
            console.log("ℹ️ Usuário Admin já existe no banco.");
        }
    } catch (error) {
        console.error("❌ Erro ao criar Seed de Admin:", error);
    }
}

module.exports = {seedAdmin};