const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.get('/user/getUser/:userId',usercontroller.getOneUser);
router.get('/user/allUsers',usercontroller.getAllUser);
router.patch('/user/editPorfile/:userId',usercontroller.updateUserInfo);

module.exports=router;

