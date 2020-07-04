const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  username: {
      type: String, 
      required: true,
      trim: true
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
