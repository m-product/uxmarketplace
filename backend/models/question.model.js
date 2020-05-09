const mongoose = require('mongoose');

const { Schema } = mongoose;
const questionSchema = new Schema({
    QuestionBody: {
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
    }
});

const Question = mongoose.model('Questions', questionSchema);

module.exports = Question;
