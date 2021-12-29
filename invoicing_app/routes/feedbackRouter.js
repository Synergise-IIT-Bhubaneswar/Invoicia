const express = require('express');
const router = express.Router();
const {verifytoken}=require('../utils/verifyToken');
const feedbackController = require('../controllers/feedbackcontroller');

router.get('/feedbacks',verifytoken,feedbackController.getAllFeedback);
router.post('/feebacks/new',verifytoken,feedbackController.postNewFeedback);
router.patch('/feedbacks/:feedbackID/edit',verifytoken,feedbackController.updateFeedback);
router.delete('/feedbacks/:feedbackID/remove',verifytoken,feedbackController.deleteFeedback)

module.exports=router;

