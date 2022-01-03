const { CreditBalance } = require('../../models')
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = async (req, res) => {


  // 추세 데이터 보내기

  const endId = await CreditBalance.max('id')
  const startId = endId - 2

  const endObj = await CreditBalance.findAll({where:{id:endId}})
  const startObj = await CreditBalance.findAll({where:{id:startId}})

  const end = endObj[0].dataValues.all
  const start = startObj[0].dataValues.all
  
  if (end-start>0) {  // 상승
      res.status(200).json({data: '상승', value: end})
  } else { // 하락
      res.status(200).json({data: '하락', value: end})
  }
}