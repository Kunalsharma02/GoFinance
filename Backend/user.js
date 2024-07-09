const Sequelize=require('sequelize');
const sequelize=require('./server')
const user=sequelize.define('users',{

    Name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Status:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=user; 