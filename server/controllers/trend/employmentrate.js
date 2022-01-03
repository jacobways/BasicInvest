const { EmploymentRate } = require('../../models')
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = async (req, res) => {


  // 추세 데이터 보내기

  // 6개월 1 이상 증가하면 매도하는게 좋음

  const endId = await EmploymentRate.max('id')
  const middleId = endId - 3
  const startId = endId - 6

  const endObj = await EmploymentRate.findAll({where:{id:endId}})
  const middleObj = await EmploymentRate.findAll({where:{id:middleId}})
  const startObj = await EmploymentRate.findAll({where:{id:startId}})

  const end = endObj[0].dataValues.value
  const middle = middleObj[0].dataValues.value
  const start = startObj[0].dataValues.value
  
  if (end-start>0) {  // 상승
    if (middle-start>0) {
      if (middle-start>=1) {
        res.status(200).json({long: '상승', short: '상승', message: '매도 (하락장으로 전환)'})
      } else {
        res.status(200).json({long: '상승', short: '상승', message: '매도'})
      }
    } else {
      res.status(200).json({long: '상승', short: '하락', message: '매수 준비 (실업률 하락 추세로 전환 시 매수 예정)'})
    }
     
  } else { // 하락
      if (middle-start>0) {
        res.status(200).json({long: '하락', short: '상승', message: '주의 (실업률 상승 추세로 전환 시 매도 예정)'})
      } else {
        res.status(200).json({long: '하락', short: '하락', message: '매수'})
      }
  }
}