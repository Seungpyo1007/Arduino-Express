// router/index.js

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST 요청을 처리하는 핸들러 */
router.post('/your-endpoint', function(req, res, next) {
  const temperature = req.body.temperature;
  const humidity = req.body.humidity;

  console.log(`Received temperature: ${temperature}, humidity: ${humidity}`);

  // index.ejs를 렌더링하면서 temperature와 humidity 값을 전달
  res.render('index', { temperature, humidity });
});

module.exports = router;
