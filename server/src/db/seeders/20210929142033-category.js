/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Новый год',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'День рождения',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Хэллоуин',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '8 марта',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Рождество',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '23 февраля',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Свадьба',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Новоселье',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Развод',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'День профессии',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Прочее',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
