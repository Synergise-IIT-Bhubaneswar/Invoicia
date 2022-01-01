const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  feedback: {
    type: String,
    required: [true, "Please write feedback message"],
    minLength: [20, "Should contains atleast 20 words"],
  },
  rating: {
    type: Number,
    required: [true, "Rating must be specified wih feedback"],
    max: 5,
  },
  {
    timestamps: true
}
});

module.exports = mongoose.model("feedback", feedbackSchema);
