const { KoreanExport } = require('../../models')
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = async (req, res) => {


  // 추세 데이터 보내기

  const endId = await KoreanExport.max('id')
  const middleId = endId - 1
  const startId = endId - 2

  const endObj = await KoreanExport.findAll({where:endId})
  const middleObj = await KoreanExport.findAll({where:middleId})
  const startObj = await KoreanExport.findAll({where:startId})

  const end = endObj[0].dataValues.average
  const middle = middleObj[0].dataValues.average
  const start = startObj[0].dataValues.average
    
  if (end-start>0) {  // 상승

    if (start<middle && middle<end) {  // 연속 상승
      res.status(200).json({data: '상승'})

    } else {  // 1번은 하락
      res.status(200).json({data: '횡보중이며 약하게 상승'})
    }

  } else { // 하락

    if (start>middle && middle>end) {  // 연속 하락
      res.status(200).json({data: '하락'})
    } else {  // 1번은 상승
      res.status(200).json({data: '횡보중이며 약하게 하락'})
    }
  }
}