async function actionsMap(req,res) {
    
    const adminLogged = req.session.user
    const date = new Date();
    const dataEHora = date.toLocaleString('pt-BR');

    console.log("Ação realizada por: "+adminLogged);
    console.log("Ação realizada em: "+dataEHora);
};


module.exports = {actionsMap};