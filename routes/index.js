var express = require('express');
var router = express.Router();
const middleware = require('../middleware/customMiddleware')

/* GET home page. */
router.get('/', middleware.helloMiddleware, function(req, res, next) {
  res.render('index', { title: 'pokemon homepage' });
});

//get middleware test page
router.get('/test', middleware.getDate, (req, res, next) => {
  console.log(req.requestTime);
  res.render('index', {title: req.requestTime})
})

module.exports = router;
