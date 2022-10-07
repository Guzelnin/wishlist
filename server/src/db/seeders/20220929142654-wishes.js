/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Wishes', [
      {
        name: 'iPhone',
        link: 'https://www.apple.com/ru/iphone/',
        photo: 'wish/iPhone-6c-renders-1.jpeg',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Аппарат для маникюра',
        link: 'https://www.wildberries.ru/catalog/20994043/detail.aspx?targetUrl=MI',
        photo: 'wish/19094562-1.jpeg',
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Пылесос с мешком для сбора пыли',
        link: 'https://www.wildberries.ru/catalog/12108388/detail.aspx?targetUrl=GP',
        photo: 'wish/Kambrook_ABV400-1.jpeg',
        category_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Кожаный рюкзак',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/d462dc8a4f564ee58f989612b142--sumki-i-aksessuary-kozhanyj-ryukzak.jpeg',
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Военный билет',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/2022-10-07 11.14.48.jpg',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Моторное масло',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/2022-10-07 11.15.48.jpg',
        category_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gucci',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/2022-10-07 11.17.10.jpg',
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Браслет',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/2022-10-07 11.18.50.jpg',
        category_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Кеды',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/2022-10-07 11.20.45.jpg',
        category_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Билет в Корею',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/2022-10-07 11.21.43.jpg',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Браслет Cartier',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/2022-10-07 11.22.52.jpg',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mini Cooper',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/2022-10-07 11.24.18.jpg',
        category_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Носки',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/2022-10-07 11.25.06.jpg',
        category_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: 'Поездка на море',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/2022-10-07 11.26.18.jpg',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: 'Лучший подарок',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/best.jpg',
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tesla',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/2017_Black_stylish_electric_Tesla_Model_S_on_the_background_of_night_city_111469_-2048x1336.jpeg',
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Электросамокат',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/legkij_elektrosamokat.webp',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сертификат в ЦУМ',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/b7d1e4bf9b281101213c17a0cc0b6fda.jpeg',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Серф',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/c2988d240a1336d8a08c37f5df9a7beb.jpeg',
        category_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Деньги!!!',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/WhatIsAUM_GettyImages-142522661-bbe456edbf284b17848047f61761c63b.jpeg',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Щенок',
        link: 'https://www.wildberries.ru/catalog/102442783/detail.aspx?targetUrl=XS',
        photo: 'wish/velsh-korgi-pembrok-velsh-korgi-sobaka-shhenok-yazyk-trava-fon.jpeg',
        category_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Wishes', null, {});
  },
};
