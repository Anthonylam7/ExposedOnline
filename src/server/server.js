var express = require('express');
var app = express();
var server = require("http").Server(app);
var io = require("socket.io").listen(server);


var CLIENT_DIR = express.static(__dirname +'./../client');
app.use(CLIENT_DIR);
app.use("/build", express.static(__dirname + "./../../build"));
// app.use('/css',express.static(__dirname + '/css'));
// app.use('/js',express.static(__dirname + '/js'));
// app.use('/assets',express.static(__dirname + '/assets'));

app.get('/',function(req,res){
    res.sendFile(CLIENT_DIR+'/index.html');
});

io.on("connection", (socket)=>{
	console.log("New connection from: ", socket.id);
	socket.on("newConnection", ()=>{
		console.log("Howdy")
	})
});


server.listen(3000, "0.0.0.0",function(){ // Listens to port 8081
    console.log('Listening on '+server.address().port);
});
