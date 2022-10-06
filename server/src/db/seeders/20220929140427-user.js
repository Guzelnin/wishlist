/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('Users', [
    //   {
    //     name: 'yulia_test',
    //     email: 'yulya@yulya.com',
    //     password: '123',
    //     photo: 'https://pm1.narvii.com/7611/3f8d6eabab5ad36913fd7c957106fd0e660c03a5r1-1080-1350v2_hq.jpg',
    //     bday: '2000-01-17',
    //     description: 'Я очень люблю Новый год!',
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     name: 'guzel_test',
    //     email: 'guzel@guzel.com',
    //     password: '123',
    //     photo: 'http://mobimg.b-cdn.net/v3/fetch/2c/2c38ec7c72e3d0094f591d6f735a3b8e.jpeg',
    //     bday: '1990-07-19',
    //     description: 'Я очень люблю день рождения!',
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     name: 'sergey_test',
    //     email: 'sergey@sergey.com',
    //     password: '123',
    //     photo: 'https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg',
    //     bday: '1996-02-27',
    //     description: 'Я очень люблю Хеллоуин!',
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     name: 'yara_test',
    //     email: 'yara@yara.com',
    //     password: '123',
    //     photo: 'https://i.pinimg.com/originals/ca/51/71/ca5171c7e01f8e523aa3c5b21c2f09ae.png',
    //     bday: '2001-01-24',
    //     description: 'Я очень люблю Пасху!',
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
