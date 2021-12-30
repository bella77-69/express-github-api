// Routes for our API
const express = require('express');
const getRepos = require('../Controllers/getRepos');

var reposRouter = express.Router();
var reposWithDateRouter = express.Router();

// get trending repos from the actual date
reposRouter.get('/api/repos', getRepos);

//get trending repos with from the given date
reposWithDateRouter.get('/api/repos/:date', getRepos);

module.exports = { reposRouter, reposWithDateRouter };