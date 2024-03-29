const { TenMinusTwo } = require('../../models')
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = async (req, res) => {


  // 추세 데이터 보내기

  const endId = await TenMinusTwo.max('id')
  const startId = endId - 2

  const endObj = await TenMinusTwo.findAll({where:{id:endId}})
  const startObj = await TenMinusTwo.findAll({where:{id:startId}})

  const end = endObj[0].dataValues.average
  const start = startObj[0].dataValues.average


  let zero = false;

  const zeroArr = await TenMinusTwo.findAll({
    where:{
      id: {
        [Op.between]: [endId-500, endId]
      }
    }
  })

  for (let ele of zeroArr) {
    if (ele.dataValues.value <= 0) zero = true;
    break;
  }


   
  if (end-start>0) {  // 상승
      res.status(200).json({data: '상승', message: '가치주/경기민감주', zero: zero})
  } else { // 하락
      res.status(200).json({data: '하락', message: '성장주/기술주', zero: zero})
  }
}