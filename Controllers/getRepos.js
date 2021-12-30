const express = require('express');
const axios = require('axios');

const {
  getDate,
  getTrendingRepos,
  pushNonNullRepos,
} = require('../utils/utils');

const getRepos = (request, response) => {
  var date = getDate(request.params.date);
  var url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&per_page=100`;
  // emptying the repos and languages array before each request.
  var repos = [];
  var languages = [];

  axios
    .get(url)
    .then(function (res) {
      pushNonNullRepos(res.data.items, repos); // push only the repos where the language is not null

      for (let i = 0; i < repos.length; i++) languages.push(repos[i].language);
      languages = [...new Set(languages)]; // remove dupplicates
      response.json(getTrendingRepos(languages, repos));
    })
    .catch(function (err) {
      response.send(err);
    });
};

module.exports = getRepos;