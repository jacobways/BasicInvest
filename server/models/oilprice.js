'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OilPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OilPrice.init({
    date: DataTypes.DATE,
    value: DataTypes.DECIMAL(5,2)
  }, {
    sequelize,
    modelName: 'OilPrice',
  });
  return OilPrice;
};