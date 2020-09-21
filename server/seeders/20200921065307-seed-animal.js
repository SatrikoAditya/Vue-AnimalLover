'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let animal = JSON.parse(fs.readFileSync('./animals.json'))
   for(let i = 0; i < animal.length; i++) {
     animal[i].createdAt = new Date()
     animal[i].updatedAt = new Date()
   }
   return queryInterface.bulkInsert('Animals', animal, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Animals', null, {})
  }
};
