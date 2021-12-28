const userModel = require("./../models/user");

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
    const updatedPassword = req.body.password;

    const updateduser = await userModel.findById(req.params.userId);
    updateduser.email = updatedEmail;
    updateduser.password = updatedPassword;
    updateduser.updateAt = new Date();
    updateduser.save();

    res.status(200).json(updateduser);
  } catch (err) {
    res.status(500).send(err);
  }
};
