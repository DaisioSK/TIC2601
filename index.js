//import
const path = require('path');
const express = require('express');

//create the app instance
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * path navi
 * to be filled in later
 */
app.get('/', (req, res) => {
    res.render('home');
});


//server
var server = app.listen(80, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
});

