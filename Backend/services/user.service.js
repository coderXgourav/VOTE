const { userModel } = require("../models/user.model");
const { generateBcryptPassword } = require("../utils/Common.utils");
const { compareBcryptPassword } = require("../utils/Common.utils");
const { generateJwt } = require("../utils/Common.utils");

module.exports.userSignupService = async ({
  fullName,
  email,
  username,
  password,
}) => {
  const checkExist = await userModel.findOne({ email: email });
  const checkUsername = await userModel.findOne({ username: username });

  if (checkExist) {
    throw new Error("Email Already Exist..");
  }

  if (checkUsername) {
    throw new Error("Username Already Exist..");
  }

  const hashPassword = await generateBcryptPassword(password);
  const user = await userModel.create({
    fullName: {
      firstName: fullName.firstName,
      lastName: fullName.lastName,
    },
    email: email,
    username: username,
    password: hashPassword,
  });
  return { user };
};

module.exports.userLoginService = async (username, password) => {
  const checkUsername = await userModel.findOne({
    $or: [{ username: username }, { email: username }],
  }).select("+password");
  if(!checkUsername){
    throw new Error("Incorrect Login Details.");
  }
  const passwordCheck = await compareBcryptPassword(password,checkUsername.password);
  if(!passwordCheck){
    throw new Error("Incorrect Login Details");
  }
  const token = await generateJwt(checkUsername._id);
  return {token,name:checkUsername.fullName.firstName};

};
