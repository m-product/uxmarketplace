const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv/config');

const userRoute = require('./routes/users');
const questionRoute = require('./routes/questions');
const emailRoute = require('./routes/emails');

app.use(express.json());
app.use(cors());

app.use('/users/', userRoute);
app.use('/questions/', questionRoute);
app.use('/emails/', emailRoute);

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB');
});

port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});