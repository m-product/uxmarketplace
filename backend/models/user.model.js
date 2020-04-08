const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    full_name: {
        type: String,
        required: true,
    },
    email_address: {
        type: String,
        required: true,
        trim: true,
    },
    user_type: {
        type: String, // Web-owner or ux-designer
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
