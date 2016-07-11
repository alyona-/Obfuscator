//var user = require('./modules/module.js');

var http = require('http');
var module = require("./modules/module.js");
var conf = require('./configs/conf.json');
//var fs = require('fs');



http.createServer(function(req, res){
	
	//res.writeHead(200, {'Content-Type': 'text/html'});
	//res.end('Hello World\n');
	
	
    //document.write(contents);
	
//	var user = require('./modules/module.js');
	res.writeHead(300, {'Content-Type': 'text/html; charset=utf-8'});
	//var newStyle = require('./modules/module.js');
	
	
	//var name = user;
	//var contents = fs.readFileSync('main.css', 'utf-8'); //Запись в строку стилей css
	//var content_module = require('./modules/module.js');
	//res.end('<br>'+content_module +'<br>');
	
	
    // module.start();
	res.end(module);
	
	
	
	
	
}).listen(8080);

console.log('Server running on port 8080.');