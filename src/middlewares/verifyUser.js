const User = require("../models/user");
const bcrypt = require('bcryptjs'); // Mudança crucial para rodar na Nuvem

async function verifyUser(req, res, login, password) {
    try {
        console.log(`🔍 Buscando usuário: ${login}`);

        const user = await User.findOne({
            where: { email: login }
        });

        if (!user) {
            console.log("❌ Usuário Inexistente no banco.");
            return res.redirect("/");
        }

        console.log("✅ Usuário encontrado, verificando senha...");
        const match = await bcrypt.compare(password, user.password);

        if (match) {
            req.session.user = {
                id: user.id,
                name: user.name,
                role: user.role
            };

            // Salva a sessão e só redireciona no callback de sucesso
            return req.session.save((error) => {
                if (error) {
                    console.log("❌ Falha ao salvar a sessão:", error);
                    return res.redirect("/");
                }
                console.log("🚀 Sessão realizada com sucesso!!");
                return res.redirect("/admin/dashboard");
            });

        } else {
            console.log("❌ Senha incorreta, acesso negado.");
            return res.redirect("/");
        }

    } catch (error) {
        console.log("🚨 ERRO CRÍTICO NO VERIFYUSER:");
        console.error(error); // Isso aqui vai cuspir o erro real no console da Square
        
        if (!res.headersSent) {
            return res.redirect("/");
        }
    }
}

module.exports = { verifyUser };