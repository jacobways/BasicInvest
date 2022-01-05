'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreditBalance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CreditBalance.init({
    date: DataTypes.DATE,
    all: DataTypes.INTEGER,
    kospi: DataTypes.INTEGER,
    kosdaq: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CreditBalance',
  });
  return CreditBalance;
};