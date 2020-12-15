'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieCast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  };
  MovieCast.init({
    role: DataTypes.STRING,
    MovieId: DataTypes.INTEGER,
    CastId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MovieCast',
  });
  return MovieCast;
};