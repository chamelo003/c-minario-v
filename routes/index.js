var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next) {
  res.render('index', { title: 'Data {URi}' });
});

router.get('/porsi', function(req, res, next) {
  res.render('index', { title: 'PorsiURi' });
});

// router recie 2 parametros, la url y una funcion con 3 parametros
router.get('/ruta', function(req, res, next){
  res.render('newview',{"nombrellave":"valorllave","nombre:":"samuel :v"});
})
module.exports = router;
