const feedbackModel = require("./../models/feedback");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllFeedback = catchAsync(async (req, res) => {
  const allFeedback = await feedbackModel.find({});

  if (!allFeedback.length)
    return next(new AppError(`Don't have any feedback at this time!!!`, 404));

  res.status(200).json(allFeedback);
});

exports.postNewFeedback = catchAsync(async (req, res) => {
  const newFeedback = new feedbackModel({
    author: req.user,
    feedback: req.body.feedback,
    rating: req.body.rating,
  });
  await newFeedback.save();
  res.status(200).json({
    status: "Feedback Created",
    newFeedback,
  });
});

exports.updateFeedback = catchAsync(async (req, res) => {
  const updatedFeedback = req.body.feedback;
  const updatedRating = req.body.rating;

  const updatedFeedback = await feedbackModel.findById(req.params.feedbackId);

  if (!updateFeedback)
    return next(
      new AppError(
        `Feedback at id ${req.params.feedbackId} does not exist!!!`,
        403
      )
    );

  (updatedFeedback.passward = updatedFeedback),
    (updatedFeedback.rating = updatedRating),
    await updatedUser.save();

  res.status(200).json(updateduser);
});

exports.deleteFeedback = catchAsync(async (req, res) => {
  const data = await feedbackModel.findByIdAndRemove(req.params.feedbackId);

  if (!data)
    return next(
      new AppError(
        `Feedback at id ${req.params.feedbackId} does not exist!!!`,
        403
      )
    );
  res.status(200).send({
    status: "success",
    message: `Feedback with ${req.params.feedbackId} Id deleted successfully`,
  });
});
