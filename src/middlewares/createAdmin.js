const User = require("../models/user"); // Verifique se o caminho e o "U" maiúsculo estão certos
const bcrypt = require("bcryptjs");

async function seedAdmin() {
    try {
        // 1. Verifica se o admin já existe pelo e-mail
        const adminExists = await User.findOne({ where: { email: "admin@admin.com" } });

        if (!adminExists) {
            // 2. Criptografa a senha (instale com: npm install bcryptjs)
            const hashedPassword = await bcrypt.hash("admin@10", 15);

            // 3. Cria o usuário usando exatamente os nomes do seu Model
            await User.create({
                name: "Admin",
                email: "admin@admin.com",
                password: hashedPassword,
                role: "ADMIN" // Usando o ENUM que você definiu como ADMIN
            });

            console.log("✅ Usuário Admin criado com sucesso!");
        } else {
            console.log("ℹ️ Usuário Admin já existe no banco.");
        }
    } catch (error) {
        console.error("❌ Erro ao rodar o Seed de Admin:");
        // Isso vai imprimir o erro detalhado se algo falhar
        console.error(error.message); 
    }
}

module.exports = {seedAdmin};