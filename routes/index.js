var express = require('express');
var router = express.Router();

// github.authenticate({
//                       type: "oauth",
//                       key: "66cd10907231e9bd5d44",
//                       secret: "02723051ec825904b0c5e9e5996257c8a2cb54a7"
//                     });

const githubSearchRepos = require('github-search-repos');

results = githubSearchRepos('gulp').then(data => {

  var resultset = [];
  var pages = [];

  for(var i in data.items)
  {
    resultset[i] = data.items[i];

    for(var p = 0; p <= resultset.length; p += 10)
    {
      pages[p] += data.items[i];
    }

    console.log(data.items[i]);
  }

  console.log(pages);

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Search Repositories', results: resultset });
  });

});

module.exports = router;
