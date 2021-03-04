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

    await queryInterface.bulkInsert("Previews", [{
      id: 45,
      term_id: 29,
      type: "preview",
      content: "//portal.panelo.co/paneloresto/uploads/20/10/21102016032509585f8fab0e771b0.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 47,
      term_id: 30,
      type: "preview",
      content: "//portal.panelo.co/paneloresto/uploads/20/12/07122016073215155fcdc7ab18dd9.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 49,
      term_id: 31,
      type: "preview",
      content: "//portal.panelo.co/paneloresto/uploads/20/12/07122016073247255fcdd4354c14a.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 53,
      term_id: 33,
      type: "preview",
      content: "//portal.panelo.co/paneloresto/uploads/20/12/07122016073250025fcdd54a7e85b.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 55,
      term_id: 34,
      type: "preview",
      content: "//portal.panelo.co/paneloresto/uploads/20/10/21102016032509585f8fab0e771b0.jpg",
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

    await queryInterface.bulkDelete('Previews', null, {})
  }
};
