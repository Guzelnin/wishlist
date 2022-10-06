/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('Wishes', [
    //   {
    //     name: 'iPhone',
    //     link: 'https://www.apple.com/ru/iphone/',
    //     photo: 'https://zurmarket.ru/upload/iblock/571/apple_iphone_11_256gb_purple_99029342061387_small11.png',
    //     category_id: 1,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     name: 'Аппарат для маникюра',
    //     link: 'https://www.wildberries.ru/catalog/20994043/detail.aspx?targetUrl=MI',
    //     photo: 'https://images.wbstatic.net/big/new/20990000/20994043-1.jpg',
    //     category_id: 4,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     name: 'Пылесос с мешком для сбора пыли',
    //     link: 'https://www.wildberries.ru/catalog/12108388/detail.aspx?targetUrl=GP',
    //     photo: 'https://tehnoteca.ru/img/1325/1324698/sencor_svc_611_4.jpg',
    //     category_id: 8,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     name: 'Кожаный рюкзак',
    //     link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
    //     photo: 'https://cs1.livemaster.ru/storage/b3/e7/4ed10c50322b14da87b6078a8evz--sumki-i-aksessuary-kozhanyj-ryukzak-steampunk.jpg',
    //     category_id: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Wishes', null, {});
  },
};
