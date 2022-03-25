'use strict';

module.exports = {
  async up (queryInterface, Sequelize) { queryInterface.bulkInsert('Books',
    [
      {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        page_quantity: 425,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: 'O diário de Anne Frank',
        author: 'Anne Frank',
        page_quantity: 352,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    ], {}
  )},

  async down (queryInterface, _Sequelize) { queryInterface.bulkDelete('Books', null , {})} 
};
