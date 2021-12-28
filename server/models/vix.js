'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vix extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vix.init({
    date: DataTypes.DATE,
    value: DataTypes.DECIMAL(4,2)
  }, {
    sequelize,
    modelName: 'Vix',
  });
  return Vix;
};