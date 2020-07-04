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
    QuestionId:{
        type: Schema.Types.ObjectId,
        ref: "Question",
        required: true,
    },
    // Array of Feedback IDs. required set to false as response might not have a feedback. 
    FeedbackId: [{
        type: Schema.Types.ObjectId,
        ref: "Feedback"
    }]
});
const  Response = mongoose.model('Response', responseSchema);

module.exports = Feedback;