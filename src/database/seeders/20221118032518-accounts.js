'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('accounts', [
      {
        id: 1,
        balance: 100,
      },
    ], { });
  },

  async down (queryInterface) { queryInterface.bulkDelete('accounts', null, {}) }
};
