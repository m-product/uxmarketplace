const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const userRoute = require('./routes/users');

app.use(express.json());

app.use('/users', userRoute);

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