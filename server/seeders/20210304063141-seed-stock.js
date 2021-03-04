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
    await queryInterface.bulkInsert("Stocks", [{
      id: 1,
      stock: 1,
      term_id: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      stock: 10,
      term_id: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      stock: 20,
      term_id: 31,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      stock: 1,
      term_id: 33,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      stock: 10,
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

    await queryInterface.bulkDelete('Stocks', null, {})
  }
};
