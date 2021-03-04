'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Prices", [{
      id: 1,
      price: 15000,
      term_id: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      price: 2000,
      term_id: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      price: 2000,
      term_id: 31,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      price: 6000,
      term_id: 33,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      price: 12000,
      term_id: 34,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Prices', null, {})
  }
};
