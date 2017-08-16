var router = require('express').Router();
var handlers = require('./handlers.js');

router.get('/', (req, res) => {
  res.send('<h1>Welcome to the Simple GitHub API!</h1>');
});

router.get('/fetch/:username', handlers.fetchOneKeyPair);

router.post('/fetch', handlers.fetchKeyPairs);


module.exports = router;