async function makeLogout(req,res) {
    try{
        
        req.session.destroy(()=>{
            return res.redirect("/");
        });

    }catch(error){

        console.log("Erro ao realizar logout");
        return res.redirect("/");
    };
};

module.exports = {makeLogout};