'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  Cast.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING
  }, {sequelize});

  Cast.beforeCreate((cast) => {
    if (!cast.last_name){
      cast.last_name = cast.first_name
    }
  })

  Cast.associate = function(models) {
    // associations can be defined here
    Cast.belongsToMany(models.Movie, {through:models.MovieCast})
  };
  return Cast;
};