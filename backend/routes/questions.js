const express = require('express');
const Joi = require('joi');
const morgan = require('morgan');
const Question = require('../models/question.model');

const router = express.Router();

// logging tool
// can use 'short' or 'combined'
router.use(morgan('short'));

// retrieve all questions from database
router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.json({ message: err })
    }
});

// retrieve one question from database based off id
router.get('/:id', async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        res.json(question);
    } catch (err) {
        res.json({ message: err })
    }
});

// add question to database
router.post('/', async (req, res) => {
    const { error } = validateQuestion(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const tempQuestion = new Question({
        QuestionBody: req.body.QuestionBody,
        Category: req.body.Category,
        Difficulty: req.body.Difficulty,
    }); 

    tempQuestion.save()
        .then(data => {
            res.json(data);
        });
});

const validateQuestion = (question) => {
    const schema = {
        QuestionBody: Joi.string().required(),
        Category: Joi.string().required(),
        Difficulty: Joi.string().required(),
        created: Joi.date(),
    };
    return Joi.validate(question, schema);
};

module.exports = router;
