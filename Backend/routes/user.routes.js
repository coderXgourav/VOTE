const express = require("express");
const userRoute = express.Router();
const userController = require("../controllers/user.controller");
const {loginVerify} = require("../middlewares/loginVerify.middleware");

userRoute.post("/signup",userController.userRegister);
userRoute.post("/login",userController.userLogin);
userRoute.post("/logout",loginVerify,userController.userLogout);
module.exports = {userRoute};