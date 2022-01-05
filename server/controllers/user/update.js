const { User } = require('../../models');
const { Op } = require("sequelize");
require("dotenv").config();

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
      .then((data)=>{
        res.status(200).send('회원 정보가 수정되었습니다.')
      })
      .catch((err)=>{
        console.log(err);
      })
    }

  }
}
