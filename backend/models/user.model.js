const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  full_name: {
      type: String,
      required: true
  },
  email_address: {
      type: String, 
      required: true,
      trim: true
  },
  user_type:{
      type: String,  // Web-owner or ux-designer
      required: true
  },
  // Array of Feedback IDs. required set to false as user might not have a feedback. 
  FeedbackId: [{
    type: Schema.Types.ObjectId,
    ref: "Feedback"
}],
// Array of Response IDs. required set to false as response might not have a response. 
ResponseId: [{
  type: Schema.Types.ObjectId,
  ref: "Response"
}]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
