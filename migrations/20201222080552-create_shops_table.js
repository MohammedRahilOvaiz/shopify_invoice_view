'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shops', {
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
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('shops');
  }
};
