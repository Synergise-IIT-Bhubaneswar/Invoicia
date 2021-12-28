const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.get('/:userId/getUser',usercontroller.getOneUser);
router.get('/allUsers',usercontroller.getAllUser);
router.patch('/:userId/editPorfile',usercontroller.updateUserInfo);

module.exports=router;

