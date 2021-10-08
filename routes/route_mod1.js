var express = require('express');
var router = express.Router();
var url = require('url');
var util = require('util')

//import handelers from mod1
var mod1 = require('../mod1');
const QueryString = require('qs');



// define the home page route
router.get('/', function(req, res) {
  mod1.goHome();
  res.render('mod1_home');
});

// define the about route
router.get('/about', function(req, res) {
  var params = url.parse(req.url, true).query;
  var data = mod1.goToAbout(params);
  
  // console.log(data)

  data.then((result)=>{
    console.log(result)
    res.render('mod1_about', {
      data: result
    });
  })

  // when data is not an async param, use this instead
  // res.render('mod1_about', {
  //   data: data
  // });
});

router.post('/about',(req, res)=>{
  var post = '';
  req.on('data', (chunk)=>{
    post += chunk;
    if (chunk.length > 1e6) req.connection.destroy();
  })
  req.on('end', function(){
    post = QueryString.parse(post);
    mod1.updateCategory(post);
  })

  res.redirect('/mod1');
})

router.get('/demo',function(req, res){
  res.send('hi')
})

module.exports = router;
