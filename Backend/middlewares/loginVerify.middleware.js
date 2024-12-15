const { blackListModel } = require("../models/blacklist.model");
const { userModel } = require("../models/user.model");
const { verifyJwt } = require("../utils/Common.utils");

module.exports.loginVerify = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token Not found" });
  }
  try {
    const checkBlacklist = await blackListModel.findOne({ token: token });
    if (checkBlacklist) {
      return res.status(401).json({ message: "Unauthorized Token" });
    }
    const jwtToken = await verifyJwt(token);
    const tokenId = jwtToken.id;
    const user = await userModel.findById(tokenId);
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
