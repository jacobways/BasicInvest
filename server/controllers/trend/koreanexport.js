const { KoreanExport } = require('../../models')
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = async (req, res) => {


  const { date } = req.params // yyyy-mm-dd 양식 보내줄 예정

  // 2달 전월 1일 데이터로 바꾸기
  function oneMonthAgo (date) {
    let arr = date.split('-')
    let year = arr[0]
    let month = arr[1]
    let day = "01"

    if (Number(month) < 2) {
      year = year - 1
      month = Number(month) + 12 - 1
    } else {
      month = month - 1
    }
    if (String(month).length === 1) month = "0" + month

    return year + "-" + month + "-" + day
  }

    // 4달 전 1일 데이터로 바꾸기
    function fourMonthAgo (date) {
      let arr = date.split('-')
      let year = arr[0]
      let month = arr[1]
      let day = "01"
  
      if (Number(month) < 5) {
        year = year - 1
        month = Number(month) + 12 - 4
      } else {
        month = month - 4
      }
      if (String(month).length === 1) month = "0" + month
  
      return year + "-" + month + "-" + day
    }

  // 추세 데이터 보내기

  const trend = await KoreanExport.findAll({
    where: {
      date: {
        [Op.between]: [fourMonthAgo(date), oneMonthAgo(date)]
      }
    }
  })

  let averageArr = trend.map((el)=>el.dataValues.average)
  console.log('averageArr-------', averageArr)
  console.log('averageArr------', averageArr)

  let start = averageArr[0]
  let middle = averageArr[1]
  let end = averageArr[2]

  
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