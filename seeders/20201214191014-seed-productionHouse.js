'use strict';
const productionHousesData = [
  {
    name_prodHouse: 'Walt Disney Studios',
    headquarters: "Burbank, California, United States",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name_prodHouse: 'Pixar',
    headquarters: "Emeryville, California, United States",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name_prodHouse: 'Warner Bros',
    headquarters: "Los Angeles, California, United States",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name_prodHouse: 'Universal Pictures',
    headquarters: "Universal City, California, United States",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name_prodHouse: 'Paramount Pictures',
    headquarters: "Los angeles, California, United States",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('ProductionHouses', productionHousesData)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductionHouses', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
