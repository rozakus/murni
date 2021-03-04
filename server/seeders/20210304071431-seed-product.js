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

    await queryInterface.bulkInsert("Products", [{
      id: 29,
      title: "Nasi Goreng Pedas",
      slug: "nasi-goreng",
      lang: "en",
      auth_id: 18,
      status: 1,
      type: 6,
      count: 0,
      category_id: 21,
      price_id: 1,
      stock_id: 1,
      preview_id: 45,
      addons: [''],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 33,
      title: "Pop Mie",
      slug: "pop-mie",
      lang: "en",
      auth_id: 18,
      status: 1,
      type: 6,
      count: 0,
      category_id: 21,
      price_id: 5,
      stock_id: 5,
      preview_id: 53,
      addons: [''],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 30,
      title: "Beng Beng",
      slug: "beng-beng",
      lang: "en",
      auth_id: 18,
      status: 1,
      type: 6,
      count: 0,
      category_id: 22,
      price_id: 2,
      stock_id: 2,
      preview_id: 47,
      addons: [''],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 31,
      title: "Tahu",
      slug: "tahu",
      lang: "en",
      auth_id: 18,
      status: 1,
      type: 6,
      count: 0,
      category_id: 22,
      price_id: 3,
      stock_id: 3,
      preview_id: 49,
      addons: [''],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 34,
      title: "nasi goreng",
      slug: "nasi-goreng",
      lang: "en",
      auth_id: 18,
      status: 1,
      type: 6,
      count: 0,
      category_id: 21,
      price_id: 6,
      stock_id: 6,
      preview_id: 55,
      addons: [''],
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

    await queryInterface.bulkDelete('Products', null, {})
  }
};
