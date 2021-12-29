const express = require('express');
const router = express.Router();
const {verifytoken}=require('../utils/verifyToken');
const feedbackController = require('../controllers/feedbackcontroller');

router.get('/',verifytoken,feedbackController.getAllFeedback);
router.post('/new',verifytoken,feedbackController.postNewFeedback);
router.patch('/:feedbackID/edit',verifytoken,feedbackController.updateFeedback);
router.delete('/:feedbackID/remove',verifytoken,feedbackController.deleteFeedback)

module.exports=router;

