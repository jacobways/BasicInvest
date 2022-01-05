const jwt = require("jsonwebtoken");
const { User } = require("../../models");

module.exports = async (req, res) => {
  
  const {email, password} = req.body

  let userInfo = await User.findOne({
    where: { email, password },
  });

  if (!userInfo) {
    res.status(400).send({ data: null, message: "가입된 정보가 없습니다." });
  } else {
    
    const payload = userInfo.dataValues
    delete payload.password
    const token = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "2h",
    });

    res
      .status(200)
      // .cookie("token", token, {
      //   domain: "localhost",
      //   path: "/",
      //   sameSite: "none",
      //   secure: true,
      //   httpOnly: true,
      // })
      .json({ data: { data: token }, message: "로그인에 성공하셨습니다." });
  }
};