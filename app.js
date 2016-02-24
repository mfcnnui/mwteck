
/**
 * Module dependencies.
 */
//工程主入口点
var express = require('express');
var http = require('http');
var path = require('path');//管理路径

var app = express();

// all environments
app.set('port', process.env.PORT || 9000);

app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret:'test'}))
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/login.html',function(req,res){
    res.sendfile('./public/login.html')
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
