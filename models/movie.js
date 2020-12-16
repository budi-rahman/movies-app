'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.ProductionHouse)
      Movie.belongsToMany(models.Cast, {through:models.MovieCast})
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    released_year: {
      type : Sequelize.INTEGER,
      validate : {
        kabisatCheck(value){
          const year = Number(value)
          if(year % 4 === 0 && year % 100 !== 0){
            throw error
          } else if( year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
            throw error
          }
        }
      }
    },
    genre: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};