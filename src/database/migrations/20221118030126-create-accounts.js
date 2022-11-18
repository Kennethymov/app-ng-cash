'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
      },
      balance: {
        type: Sequelize.DECIMAL,
        allowNull: false, 
      },
    },
    {
      timestamps: false,
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('accounts');
  }
};
