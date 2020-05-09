const express = require('express');
const Joi = require('joi');
const morgan = require('morgan');
const EmailList = require('../models/emailList.model');

const router = express.Router();

// logging tool
// can use 'short' or 'combined'
router.use(morgan('short'));


// retrieve all addresses from database
// EX: http://localhost:3000/users/
router.get('/', async (req, res) => {
    try {
        const emailListRet = await EmailList.find();
        res.json(emailListRet);
    } catch (err) {
        res.json({ message: err });
    }
});

// retrieve one email address from database based off id
// EX: http://localhost:3000/users/:id
router.get('/:id', async (req, res) => {
    try {
        const emailRet = await EmailList.findById(req.params.id);
        res.json(emailRet);
    } catch (err) {
        res.json({ message: err });
    }
});

// add email address to database

router.post('/', async (req, res) => {
    const { error } = validateEmailEntry(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }     

    const tempEmail = new EmailList({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_address: req.body.email_address,
        responded: req.body.responded,
    });

    return tempEmail.save()
        .then((data) => {
            res.json(data);
        });
});

const validateEmailEntry = (emailEntry) => {
    const schema = {
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email_address: Joi.string().email().required(),
        responded: Joi.boolean.valid(false),
        created: Joi.date(),
    };
    return Joi.validate(emailEntry, schema);
};

module.exports = router;
