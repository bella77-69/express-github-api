var moment = require('moment');

// get the date
const getDate = (date) => {
  if (date === undefined)
    return moment().subtract(30, 'days').format('YYYY-MM-DD');
  return moment(date).subtract(30, 'days').format('YYYY-MM-DD');
};

const getTrendingRepos = (languages, repos) => {
  var result = [];
  var sameLanguageRepos = [];
  for (let i = 0; i < languages.length; i++) {
    sameLanguageRepo = [];

    for (let j = 0; j < repos.length; j++) {
      if (repos[j].language === languages[i])
        sameLanguageRepo.push(repos[j].name);
    }

    sameLanguageRepos.push(sameLanguageRepo);

    var obj = {
      language: languages[i],
      'number of repos': sameLanguageRepos[i].length,
      'repos ': sameLanguageRepos[i],
    };
    result.push(obj);
  }

  return { total_count: repos.length, result };
};

const pushNonNullRepos = (obj, repos) => {
  if (repos.length != 0) return;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].language != null) {
      let repo = {
        name: obj[i].name,
        language: obj[i].language,
      };
      repos.push(repo);
    }
  }
};

module.exports = { getDate, getTrendingRepos, pushNonNullRepos };