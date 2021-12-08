'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BondInterestRate_ten extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BondInterestRate_ten.init({
    date: DataTypes.DATE,
    value: DataTypes.DECIMAL(3,2)
  }, {
    sequelize,
    modelName: 'BondInterestRate_ten',
  });
  return BondInterestRate_ten;
};