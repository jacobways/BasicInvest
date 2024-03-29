'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmploymentRate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EmploymentRate.init({
    date: DataTypes.DATE,
    value: DataTypes.DECIMAL(3,1)
  }, {
    sequelize,
    modelName: 'EmploymentRate',
  });
  return EmploymentRate;
};