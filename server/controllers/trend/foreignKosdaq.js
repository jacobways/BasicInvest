const { ForeignTradeTrend_Kosdaq } = require('../../models')
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = async (req, res) => {

  // DB의 날짜 object 객체를 string으로 변환 (전달인자 : date 객체)
  function getDate(date) {
    let year = date.slice(11,15)
    let month = getMonth(date)
    let day = date.slice(8,10)

    if (String(month).length===1) month = "0"+month
    if (String(day).length===1) day = "0"+day

    return year + "-" + month + "-" + day
  }

  // DB의 날짜 object 객체에서 month 알파벳을 숫자로 변경 (전달인자 : date 객체)
  function getMonth(date) {
    let month = date.slice(4,7)

    if (month === "Jan") month = "01"
    if (month === "Feb") month = "02"
    if (month === "Mar") month = "03"
    if (month === "Apr") month = "04"
    if (month === "May") month = "05"
    if (month === "June") month = "06"
    if (month === "July") month = "07"
    if (month === "August") month = "08"
    if (month === "Sep") month = "09"
    if (month === "Oct") month = "10"
    if (month === "Nov") month = "11"
    if (month === "Dec") month = "12"

    return month;
  }

  // 문자열 형식의 날짜에서 연-월 정보만 얻기 (전달인자 : YYYY-MM-DD 문자열)
  function getYearMonth (date) {
    return date.slice(0,7)
  }

  // 문자열 형식의 날짜에서 어제 날짜 정보 얻기 (전달인자 : YYYY-MM-DD 문자열)
  function yesterday (date) {
    let arr = date.split('-')
    let year = arr[0]
    let month = arr[1]
    let day = arr[2]
    day -= 1

    return year + "-" + month + "-" + day
  }


  // 추세 데이터 보내기

  const lastObj = await ForeignTradeTrend_Kosdaq.max('date')
  const lastDate = getDate(String(lastObj))

  const endObj = await ForeignTradeTrend_Kosdaq.findAll({
    where: {
      date: {
        [Op.between]: [yesterday(lastDate), lastDate]
      }
    }
  })
  
  const end = endObj[0].dataValues.average;
  console.log('end-----', end)

  // lastDate의 년월보다 작은 데이터 중의 최대값
  const nextObj = await ForeignTradeTrend_Kosdaq.max('date', {where: { date: {[Op.lt]: getYearMonth(lastDate)}}})
  const nextDate = getDate(String(nextObj))

  const middleObj = await ForeignTradeTrend_Kosdaq.findAll({
    where: {
      date: {
        [Op.between]: [yesterday(nextDate), nextDate]
      }
    }
  })
  const middle = middleObj[0].dataValues.average;
  console.log('middle-----', middle)

  const earlyObj = await ForeignTradeTrend_Kosdaq.max('date', {where: { date: {[Op.lt]: getYearMonth(nextDate)}}})
  const earlyDate = getDate(String(earlyObj))

  const startObj = await ForeignTradeTrend_Kosdaq.findAll({
    where: {
      date: {
        [Op.between]: [yesterday(earlyDate), earlyDate]
      }
    }
  })
  const start = startObj[0].dataValues.average;
  console.log('start-----', start)
  
  const endValue = endObj[0].dataValues.value;
  const startValue = startObj[0].dataValues.value;

  let netValue

  if (endValue - startValue >= 0) {
    netValue = {
      message : '순매수',
      value : endValue - startValue
    }
  } else {
    netValue = {
      message : '순매도',
      value : startValue - endValue
    }
  }
  
  if (end-start>0) {  // 상승

    if (start<middle && middle<end) {  // 연속 상승
      res.status(200).json({data: '상승', netValue: netValue})

    } else {  // 1번은 하락
      res.status(200).json({data: '횡보중이며 약하게 상승', netValue: netValue})
    }

  } else { // 하락

    if (start>middle && middle>end) {  // 연속 하락
      res.status(200).json({data: '하락', netValue: netValue})
    } else {  // 1번은 상승
      res.status(200).json({data: '횡보중이며 약하게 하락', netValue: netValue})
    }
  }
}