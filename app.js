// Base setup
const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const { reposRouter, reposWithDateRouter } = require('./Routes/repos');

const port = process.env.PORT || 8000;
const app = express(); // define our app using express

app.use(morgan('dev'));

// Using our middleware functions
app.use(reposRouter);
app.use(reposWithDateRouter);

// start the server
app.listen(port, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is listening on port ${port}`);
});