const Sequelize = require('sequelize');
const sequelize = require('./server')
const wallet = sequelize.define('wallets', {

    UID: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Amount: {
        type: Sequelize.STRING,
        allowNull: true
    },    
    Status: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = wallet; 