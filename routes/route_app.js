var express = require('express');
var router = express.Router();   //使用 express.Router 类创建模块化、可挂载的路由句柄

// 访问根路由 渲染 index 模板
router.get('/', function (req, res) {
    res.render('home');
});



// var mod1 = require('./routes/router');
// app.use('/', mod1);


module.exports = router;

