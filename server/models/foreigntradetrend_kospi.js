'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ForeignTradeTrend_Kospi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ForeignTradeTrend_Kospi.init({
    date: DataTypes.DATE,
    value: DataTypes.INTEGER,
    percent: DataTypes.DECIMAL(3,1)
  }, {
    sequelize,
    modelName: 'ForeignTradeTrend_Kospi',
  });
  return ForeignTradeTrend_Kospi;
};