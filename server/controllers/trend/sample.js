const { KoreanExport } = require('../../models')
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = async (req, res) => {

  // new Date 객체 형식을 yyyy-mm-dd 로 바꿔줌
  function getDate(date){
    let year = date.getFullYear();
    let month = ("0" + (1 + date.getMonth())).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
  }

  // new Date 객체 형식을 yyyy-mm-dd 로 바꿔주되, 1달 전 데이터 표시
  function oneMonthAgo (date) {
    let year = date.getFullYear();
    let month = ("0" + (1 + date.getMonth())).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);

    if (Number(day) === 31) day = "30"
  
    if (Number(month) < 2) {
      year -= 1;
      month = Number(month) + 12 - 1
    } else {
      month -= 1
    }

    if (Number(month) === 2 && Number(day)>28) day = "28"

    return year + "-" + month + "-" + day;
  }

  // new Date 객체 형식을 yyyy-mm-dd 로 바꿔주되, 2달 전 데이터 표시
  function twoMonthAgo (date) {
    let year = date.getFullYear();
    let month = ("0" + (1 + date.getMonth())).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);

    if (Number(day) === 31) day = "30"
  
    if (Number(month) < 2) {
      year -= 1;
      month = Number(month) + 12 - 2
    } else {
      month -= 2
    }

    if (Number(month) === 2 && Number(day)>28) day = "28"

    return year + "-" + month + "-" + day;
  }

  // new Date 객체 형식을 yyyy-mm-dd 로 바꿔주되, 3달 전 데이터 표시
  function threeMonthAgo (date) {
    let year = date.getFullYear();
    let month = ("0" + (1 + date.getMonth())).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);

    if (Number(day) === 31) day = "30"
  
    if (Number(month) < 2) {
      year -= 1;
      month = Number(month) + 12 - 3
    } else {
      month -= 3
    }

    if (Number(month) === 2 && Number(day)>28) day = "28"

    return year + "-" + month + "-" + day;
  }

  const today = new Date()

  // 추세 데이터 보내기

  const trend = await KoreanExport.findAll(
    {where: {date: '2021-11-30'}}
  )

  // const trend = await KoreanExport.findAll({
  //   where: {
  //     [Op.or] : [
  //       {date: getDate(today)},
  //       {date: oneMonthAgo(today)},
  //       {date: twoMonthAgo(today)},
  //       {date: threeMonthAgo(today)},
  //     ]
  //   }
  // })

  // const trend = await KoreanExport.findAll({
  //   where: {
  //     date: {
  //       [Op.or] : [getDate(today), oneMonthAgo(today), twoMonthAgo(today), threeMonthAgo(today)]
  //     }
  //   }
  // })
  console.log('trend', trend)


  // // 차트 데이터 보내기
  // KoreanExport.findAll({
  //   where:{
  //     date: {
  //       [Op.between]: [startDate, endDate]
  //     }
  //   }
  // })
  // .then((data)=>{
  //   res.status(200).json({
  //     message: 'ok', 
  //     data: data.map((el)=>el.dataValues).sort((a,b)=>a.date - b.date)})
  // })
  // .catch((err)=>{
  //   res.status(404).send("해당 날짜에 데이터가 없습니다.")
  // })
}