const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const responseSchema = new Schema({
    DocumentLink:{
        type: String,
        required: true
    },
    LikeCounter:{
        type: Number,
        required: true,
        default: 0
    },
    FeedbackCounter:{
        type: Number,
        required: true,
        default: 0
    },
    DateCreated:{
        type: Date,
        required: true,
        default: Date.now
    },
    UserId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    PostId:{
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    ResponseId:{
        type: Schema.Types.ObjectId,
        ref: "Response",
        required: true,
    }

});
const  Feedback = mongoose.model('Feedback', postSchema);

module.exports = Feedback;