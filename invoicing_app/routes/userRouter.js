const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.get('/getUser/:userId',usercontroller.getOneUser);
router.get('/allUsers',usercontroller.getAllUser);
router.patch('/editPorfile/:userId',usercontroller.updateUserInfo);

module.exports=router;

