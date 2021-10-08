//import
const path = require('path');
const express = require('express');

//set views
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//register router
var route = require('./routes/route_app');
app.use('/', route);

var mod1 = require('./routes/route_mod1');
app.use('/mod1', mod1);

var mod2 = require('./routes/route_mod2');
app.use('/mod2', mod2);

//server
var server = app.listen(80, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
});
