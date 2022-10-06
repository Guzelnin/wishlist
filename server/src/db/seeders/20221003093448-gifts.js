/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   'Gifts',
    //   [
    //     {
    //       owner_id: 5,
    //       giver_id: 1,
    //       wish_status: true,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       owner_id: 5,
    //       giver_id: 1,
    //       wish_status: false,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       owner_id: 2,
    //       giver_id: 5,
    //       wish_status: true,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       owner_id: 2,
    //       giver_id: 5,
    //       wish_status: false,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {},
    // );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Gifts', null, {});
  },
};
