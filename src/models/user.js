
const connection = require("../database/connection");
const Sequelize = require("sequelize");


const User = connection.define("users",{
    name:{
        type: Sequelize.STRING(),
        allowNull: false
    },
    email:{
        type: Sequelize.STRING(),
        allowNull: false
    },
    password:{
        type: Sequelize.STRING(),
        allowNull:false
    },
    role:{
        type:Sequelize.ENUM('MEMBER','ADMIN','WENDELL'),
        allowNull: false,
        defaultValue: 'MEMBER'
    },
    createdAt:{
        type: Sequelize.DATE(),
        allowNull:false,
        defaultValue: Sequelize.NOW()
    },
    updatedAt:{
        type: Sequelize.DATE(),
        allowNull:false,
        defaultValue: Sequelize.NOW()
    }
    
});



module.exports = User