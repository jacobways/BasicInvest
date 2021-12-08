const { Kospi } = require('../../models')
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = async (req, res) => {

  const { startDate, endDate } = req.query

  Kospi.findAll({
    where:{
      date: {
        [Op.notBetween]: [startDate, endDate]
      }
    }
  })
  .then((data)=>{
    res.status(200).json({message: 'ok', data: data})
  })
  .catch((err)=>{
    res.status(404).send("구직자의 경력이 없습니다")
  })
}