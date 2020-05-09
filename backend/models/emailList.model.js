const mongoose = require('mongoose');

const { Schema } = mongoose;

const emailListSchema = new Schema({

    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,

    },
    email_address: {
        type: String,
        required: true,
        trim: true,
    },
    responded: { //whether or not we have responded to the person who wants to subscribe
        type: Boolean, 
        default: false 
    },
});

const EmailList = mongoose.model('emails', emailListSchema);

module.exports = EmailList;