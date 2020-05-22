const express = require('express');
const Joi = require('joi');
const morgan = require('morgan');
const Question = require('../models/question.model');

const router = express.Router();

// logging tool
// can use 'short' or 'combined'
router.use(morgan('short'));

/* retrieve all questions from database
router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.json({ message: err })
    }
});*/

// retrieve one question from database based off id
router.get('/:id', async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        res.json(question);
    } catch (err) {
        res.json({ message: err })
    }
});

// Paged results. Input page and limit into the query. 
router.get('/', async (req, res)=> {
    try {
        const limit = parseInt(req.query.limit); // results per page
        const page = parseInt(req.query.page)
        const startIndex = (page -  1) * limit
        const endIndex = page * limit

        const results = {}
        if(endIndex <  await Question.countDocuments().exec()){
            results.next = {
                page: page +1,
                limit:limit
            }
        }
        if (startIndex > 0) {
            results.previous = {
              page: page - 1,
              limit: limit
            }
        }
        results.results = await Question.find().limit(limit).skip(startIndex).exec()
        res.json(results)
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
        ShortDescription: req.body.ShortDescription,
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
        ShortDescription: Joi.string().required(),
        Category: Joi.string().required(),
        Difficulty: Joi.string().required(),
        created: Joi.date(),
    };
    return Joi.validate(question, schema);
};

module.exports = router;
