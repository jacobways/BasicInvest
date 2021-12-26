const { ForeignTradeTrend_Kospi } = require('../../models')
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = async (req, res) => {

  const { startDate, endDate } = req.query

  ForeignTradeTrend_Kospi.findAll({
    where:{
      date: {
        [Op.between]: [startDate, endDate]
      }
    }
  })
  .then((data)=>{
    res.status(200).json({message: 'ok', data: data.map((el)=>el.dataValues).sort((a,b)=>a.date - b.date)})
  })
  .catch((err)=>{
    res.status(404).send("해당 날짜에 데이터가 없습니다.")
  })
}