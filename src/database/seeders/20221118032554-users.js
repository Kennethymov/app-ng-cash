'use strict';
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
    {
      username: 'Kennethy Magno Oliveira Valerio',
      password: '$2y$10$X41WjgXY/7GP.741SCrvE..ReeU8e0.TQPUkJd2vOkw2rykI0jJMS',
      accountId: 1,
    },
  ], { });
  },
  
  async down (queryInterface) { queryInterface.bulkDelete('users', null, {}) }
};