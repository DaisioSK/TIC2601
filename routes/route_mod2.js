var express = require('express');
var router = express.Router();

var mod2 = require('../mod2');

router.get('/', function(req, res){

    var data = mod2.giveMeSth(req);
    console.log(data);

    // res.send('root page');
    res.render('mod2_home', {
        line1: data,
        line2: 'this is line2'
    });
})

router.get('/demo', function(req, res){
    res.send('root/demo page');
})

router.get('/test', function(req, res){
    res.send('root/test page');
})

module.exports = router;