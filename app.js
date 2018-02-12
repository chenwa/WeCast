
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//Routes
var index = require('./routes/index');
var note = require('./routes/note');
var folder = require('./routes/folder');
var profile = require('./routes/profile');
var logout = require('./routes/logout');
var help = require('./routes/help');
var add_function = require('./routes/add_function');
var note_function = require('./routes/note_function');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', index.view);
app.get('/note', note.view);
app.get('/folder', folder.view);
app.get('/profile', profile.view);
app.get('/help', help.view);
app.get('/logout', logout.view);
app.get('/add_function', add_function.view);
app.get('/note_function', note_function.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
