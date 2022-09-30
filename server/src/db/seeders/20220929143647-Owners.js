/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Owners', [
      {
        wish_id: 1,
        user_id: 1,
        private: false,
        description: 'буду рада!!',
        date: '2022-12-31',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wish_id: 2,
        user_id: 4,
        private: false,
        description: 'merci',
        date: '2022-11-13',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wish_id: 4,
        user_id: 3,
        private: false,
        description: 'hi',
        date: '2022-10-10',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        wish_id: 3,
        user_id: 2,
        private: false,
        description: 'hi',
        date: '2022-11-05',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Owners', null, {});
  },
};
