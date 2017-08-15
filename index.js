require('dotenv').config();
var app = require('express')();
var router = require('./router');

var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', router);



app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});