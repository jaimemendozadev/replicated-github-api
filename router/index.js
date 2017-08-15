var router = require('express').Router();

router.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

router.get('/api', (req, res) => {
  res.send('You hit the API!');
});

router.post('/api/test', (req, res) => {
  console.log(`the req.body is ${JSON.stringify(req.body)}`);
  res.status(200).send('<h1>Good job</h1>');
});

module.exports = router;