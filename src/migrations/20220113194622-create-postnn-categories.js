'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostnnCategories', {
      postId: {
        type: Sequelize.INTEGER,
        field: 'postId',
        references: {
          model: 'Posts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: 'categoryId',
        references: {
          model: 'Categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostnnCategories');
  }
};