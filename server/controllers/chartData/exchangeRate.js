const { ExchangeRate } = require('../../models')
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = (req, res) => {

  const { startDate, endDate } = req.query

  ExchangeRate.findAll({
    where:{
      date: {
        [Op.between]: [startDate, endDate]
      }
    }
  })
  .then((data)=>{
    res.status(200).json({message: 'ok', data: data.map((el)=>el.dataValues)})
  })
  .catch((err)=>{
    res.status(404).send("해당 날짜에 데이터가 없습니다.")
  })
}