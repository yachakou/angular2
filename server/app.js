var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.post('/users/login', function (req, res) {
  console.log("Login : " + req.body.user.email);
  res.status(200);
  res.send("");
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use('/api', router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


