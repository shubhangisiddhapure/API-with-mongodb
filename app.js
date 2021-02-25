const express = require('express');
const bodyParser = require('body-parser');

//create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
 }).then(() => {
    console.log("Successfully connected to the express-mongo-app database");
 }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
 });

 
 // Require student routes
require('./routes/student.js')(app);


// listen for requests
app.listen(4000, () => {
   console.log("Server is listening on port 4000");
});
