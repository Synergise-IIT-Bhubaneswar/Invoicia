const express = require('express');
const router = express.Router();
const {verifytoken}=require('../utils/verifyToken');
const usercontroller = require('../controllers/usercontroller');

router.get('/:userId/getUser',verifytoken,usercontroller.getOneUser);
router.get('/allUsers',verifytoken,usercontroller.getAllUser);
router.patch('/:userId/editPorfile',verifytoken,usercontroller.updateUserInfo);

module.exports=router;

