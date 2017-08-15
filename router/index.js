var router = require('express').Router();
var handlers = require('./handlers.js');

router.get('/', (req, res) => {
  res.send('<h1>Welcome to the mini-GitHub API!</h1>');
});

router.get('/fetch/:username', handlers.fetchOneKeyPair);

router.post('/fetch', handlers.fetchKeyPairs);


router.post('/test', (req, res) => {
  console.log(`the req.body is ${JSON.stringify(req.body)}`);
  res.status(200).send('<h1>Passed the test</h1>');
});

module.exports = router;