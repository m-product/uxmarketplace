const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const userRoute = require('./routes/users');

const app = express();
app.use(express.json());
app.use('/users', userRoute);


// added to host with heroku
var path = require("path");
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

// connect to DB
//mongoose.connect(process.env.DB_CONNECTION, () => {
//    console.log('Connected to DB');
//});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


