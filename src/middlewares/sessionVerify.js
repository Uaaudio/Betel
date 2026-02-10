
// função para verificar se de fato existe alguém online.
async function sessionVerify(req,res,next) {
   
    try{

        const userLogged = req.session.user;
        
        const today = new Date();
        const date = today.getFullYear();

        if(userLogged){
            
            // Apenas um log pra eu saber quem está usando...
            console.log("Usuário loggado: "+ userLogged.name);
            console.log("Dia da sessão: " + date);
            
            // caso exista um usuario loado ele passa.
            return next();
    
        }else{
            // caso não exista um usuario logado ele volta pro login
            console.log("Sem Usuário válido");
            return res.redirect("/");
        }
    }catch(error){
        
        console.log("Erro ao obter sessão");
        console.log(error);
        return res.redirect("/");
    };


};


module.exports = {sessionVerify};