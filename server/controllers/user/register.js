const { User } = require('../../models')
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = async (req, res) => {

  const { username, email, password } = req.body

  const userInfo = await User.findOne({where:{email}})

  if (!userInfo) {
    User.create({username, email, password})
    .then((data)=>res.status(201).send('created'))
    .catch(console.log)
  } else {
    res.status(400).send('이미 가입된 이메일입니다.')
  }

}