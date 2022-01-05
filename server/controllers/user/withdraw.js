const jwt = require("jsonwebtoken");
const { User } = require("../../models");

module.exports = async (req, res) => {

  let token = req.params.token
  try{
    let userInfo = jwt.verify(token, process.env.ACCESS_SECRET)

    User.destroy({
      where:{id: userInfo.id}
    })
    .then((data)=>{
      res.status(202).send('accepted')
    })
    .catch(console.log)
 
  } catch(err) {
    res.json({ data: null, message: 'token expired' });
  }
};