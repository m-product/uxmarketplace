const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    QuestionBody: {
        type: String,
        required: true,
    },
    ShortDescription:{
        type: String, 
        required: true,
    },
    Category: {
        type: String,
        required: true,
        trim: true,
    },
    Difficulty: {
        type: String,
        required: true,
    },
    // Array of Feedback IDs. required set to false as question might not have a response. 
    ResponseId: [{
        type: Schema.Types.ObjectId,
        ref: "ResponseId"
    }]
});

const Question = mongoose.model('Questions', questionSchema);

module.exports = Question;