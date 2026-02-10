const User = require("../models/user");
const bcrypt = require("bcrypt");

async function wendellCreate(req,res){

    const pass = "Wendell@10"
    const hashpass = bcrypt.hash(pass,15);

    await User.create({
        name:"Wendell",
        role: 'Wendell',
        password: hashpass,
        email:"admin@sistema.com"

    });

};

module.exports = {wendellCreate};