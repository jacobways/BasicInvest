const { User } = require('../../models');
const { Op } = require("sequelize");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {

  const { id, username, email, password } = req.body

  if (!id) {
    res.status(400).send("요청하신 정보가 없습니다");
  } else {
    const userData = await User.findOne({where:{id}});
    if (!userData) {
      res.status(404).send("유저 정보가 없습니다.")
    } else {
      User.update({
        username, email, password
      }, 
      {where:{id}}
      )
      .then(async(data)=>{
        const userData = await User.findOne({where:{id}});
        const payload = userData.dataValues
        delete payload.password
        const token = jwt.sign(payload, process.env.ACCESS_SECRET, {
          expiresIn: "2h",
        });
        res.status(200).json({data: token, message: '회원 정보가 수정되었습니다.'})
      })
      .catch((err)=>{
        console.log(err);
      })
    }

  }
}
