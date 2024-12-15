const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.generateBcryptPassword  = async (password) =>{
  const newPassword = await bcrypt.hash(password,10);
  return newPassword;
}

module.exports.compareBcryptPassword = async(password,dbPassword) =>{
    const isCorrect = await bcrypt.compare(password,dbPassword);
    return isCorrect;
  }

  module.exports.generateJwt = async(id) =>{
    const token =  jwt.sign({id},process.env.SECRET_KEY);
    return token;
  }

  module.exports.verifyJwt = async(id) =>{
    const token = jwt.verify(id,process.env.SECRET_KEY);
    return token;
  }