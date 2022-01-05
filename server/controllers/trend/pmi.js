const { PMI_Index } = require('../../models')
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = async (req, res) => {


  // 추세 데이터 보내기

  // 6개월 1 이상 증가하면 매도하는게 좋음

  const endId = await PMI_Index.max('id')
  const middleId = endId - 3
  const startId = endId - 6

  const endObj = await PMI_Index.findAll({where:{id:endId}})
  const middleObj = await PMI_Index.findAll({where:{id:middleId}})
  const startObj = await PMI_Index.findAll({where:{id:startId}})

  const end = endObj[0].dataValues.value
  const middle = middleObj[0].dataValues.value
  const start = startObj[0].dataValues.value


  let crisis = false;

  const crisisArr = await PMI_Index.findAll({
    where:{
      id: {
        [Op.between]: [endId-6, endId]
      }
    }
  })

  for (let ele of crisisArr) {
    if (ele.dataValues.value <= 50) crisis = true;
    break;
  }




  if (Math.abs(end-start)<3 && Math.abs(end-middle)<3) { // 박스권
    res.status(200).json({long: '횡보', short: '횡보', message: '중립', crisis: crisis})

  } else if (end-start>0) {  // 상승
    if (end-middle>0) {
      res.status(200).json({long: '상승', short: '상승', message: '매수', crisis: crisis})
    } else {
      res.status(200).json({long: '상승', short: '하락', message: '주의 (상승 추세가 꺾이면 매도)', crisis:crisis})
    }
     
  } else { // 하락
      if (end-middle>0) {
        res.status(200).json({long: '하락', short: '상승', message: '매수 준비 (상승 추세로 전환시 매수)'})
      } else {
        if (end<50) { // 지수가 50 밑으로 하락
          res.status(200).json({long: '하락', short: '하락', message: '매도 (하락장 전환 가능성 높음)'})
        }
        else {
          res.status(200).json({long: '하락', short: '하락', message: '매도'})
        }
      }
  }
}