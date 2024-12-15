const {userModel} = require("../models/user.model");
const userService = require("../services/user.service");
const {blackListModel} = require("../models/blacklist.model");

module.exports.userRegister = async(req,res) =>{
    const {fullName,email,username,password} = req.body;
    if(!fullName.firstName || !email || !username || !password){
        return res.status(400).json({status:false,message:"Fill Required Fields"});
    }
    try{
       const result = await userService.userSignupService({fullName,email,username,password});
       return res.status(200).json({status:true,message:"Signup done ..",result})
    }catch(error){
        return res.status(500).json({status:false,message:error.message});
    }
}

module.exports.userLogin = async(req,res) =>{
    const {username,password} = req.body;
    if(!username||!password ){
        return res.status(400).json({status:false,message:"Fill Required Fields"});
    }
    try{
       const result = await userService.userLoginService(username,password);
       return res.status(200).json({status:true,message:"Login Successfull..",result})
    }catch(error){
        return res.status(500).json({status:false,message:error.message});
    }
}

module.exports.userLogout = async(req,res) =>{
    const token = req.token;
    const logout = await blackListModel.create({
        token:token
    });
    return res.status(200).json({message:"Logout Successfull"});
}