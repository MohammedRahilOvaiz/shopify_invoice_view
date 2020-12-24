const Sequelize = require('sequelize');

module.exports = sequelize.define('shop', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    accessToken: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shopUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    orders_data: {
        type: Sequelize.TEXT,
        allowNull: true
    }
});
