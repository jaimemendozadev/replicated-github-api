var app = require('express')();

var bodyParser = require('body-parser');


app.get('/', (req, res) => {
  res.send("<h1>Hello you!</h1>");
});



app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});