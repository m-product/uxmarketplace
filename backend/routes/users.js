const express = require('express');
const Joi = require('joi');
const morgan = require('morgan');
const User = require('../models/user.model');

const router = express.Router();

// logging tool
// can use 'short' or 'combined'
router.use(morgan('short'));

const validateUser = (user) => {
    const schema = {
        username: Joi.string().min(3).max(30).required(),
        full_name: Joi.string().required(),
        email_address: Joi.string().email().required(),
        user_type: Joi.string().required(),
        created: Joi.date(),
    };
    return Joi.validate(user, schema);
};

// retrieve all users from database
// EX: http://localhost:3000/users/
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

// retrieve one user from database based off id
// EX: http://localhost:3000/users/:id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});

// add user to database
// EX: http://localhost:3000/users/
// JSON BODY:
// {
//     "username": "...",
//     "full_name": "...",
//     "email_address": "...@email.com",
//     "user_type": "..."
// }
router.post('/', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const tempUser = new User({
        username: req.body.username,
        full_name: req.body.full_name,
        email_address: req.body.email_address,
        user_type: req.body.user_type,
    });

    return tempUser.save()
        .then((data) => {
            res.json(data);
        });
});

module.exports = router;
