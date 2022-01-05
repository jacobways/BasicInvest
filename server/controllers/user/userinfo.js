const jwt = require("jsonwebtoken");
const { User } = require("../../models");

module.exports = async (req, res) => {

  let token = req.params.token
  try{
    let userInfo = jwt.verify(token, process.env.ACCESS_SECRET)
    res.status(200).json({data:userInfo, message:'ok'}) 
  } catch(err) {
    res.json({ data: null, message: 'token expired' });
  }
};