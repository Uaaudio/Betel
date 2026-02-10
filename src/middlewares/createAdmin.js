const User = require("../models/user"); 
const bcrypt = require("bcrypt");

async function seedAdmin() {
    try {
        const adminExists = await User.findOne({ where: { email: "admin@sistema.com" } });

        if (!adminExists) {
            const hashedPassword = await bcrypt.hash("Wendell@10", 10);

            await User.create({
                // Ajuste aqui conforme o seu Model (visto no erro: name e password)
                name: "Wendell", 
                email: "admin@sistema.com",
                password: hashedPassword, // O erro disse que 'password' não pode ser null
                role: "WENDELL" // ou cargo, verifique seu model
            });

            console.log("✅ Usuário Admin criado com sucesso!");
        } else {
            console.log("ℹ️ Usuário Admin já existe.");
        }
    } catch (error) {
        console.error("❌ Erro ao criar Seed de Admin:");
        console.error(error);
    }
}

module.exports = {seedAdmin};