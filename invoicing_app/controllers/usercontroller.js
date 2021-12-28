const userModel = require("./../models/user");
const bcrypt = require('bcrypt');
const appError = require('../utils/appError');

exports.getOneUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send("Error in getting user" + err);
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const allUser = await userModel.find({});
    res.status(200).json(allUser);
  } catch (err) {
    res.status(500).send("Error in getting user" + err);
  }
};

exports.updateUserInfo = async (req, res) => {
  try {
    const updatedEmail = req.body.email;
    const oldPassword=req.body.oldPassword;
    const updatedPassword = req.body.newPassword;

    const updatedUser = await userModel.findById(req.params.userId);
    
    const isMatched=bcrypt.compareSync(oldPassword, updatedUser.Password);
    
    if(!isMatched) {
        return next(new appError('Incorrect old password!!!',403));
    }
    
    updatedUser.email = updatedEmail;
    updatedUser.password =  bcrypt.hashSync(updatedPassword,10);
    updatedUser.updateAt = new Date();
    await updatedUser.save();

    res.status(200).json(updateduser);
  } catch (err) {
    res.status(500).send(err);
  }
};
