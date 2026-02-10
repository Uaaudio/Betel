const connection = require("../database/connection");
const Sequelize = require("sequelize");

// Modelo do pátio de oração. BY WENDELL

const patio = connection.define("patios",{
    
    day:{
        type:Sequelize.INTEGER(),
        allowNull: false ,
        
    },
    month:{
        type:Sequelize.INTEGER(),
        allowNull: false ,
        
    },
    year:{
        type:Sequelize.INTEGER(),
        allowNull: false ,
        
    },
    collected:{
        type: Sequelize.FLOAT(),
        allowNull: false,
        defaultValue: 0
    }

});


module.exports = patio;