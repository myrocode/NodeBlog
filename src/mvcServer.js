var port = 8080;
var listenOn = '0.0.0.0';
//port = process.env.PORT;


var MvcServer = exports.MvcServer = {
	port: 8080,
	adress: '127.0.0.1',
	routes : undefined,
	masterpage : undefined,
	start : function(){
		var router = require('router').create();
	    for(var pattern in this.routes)
	    {
	        router.get(pattern, this.routes[pattern].process);
	        console.log("controller registered for pattern: " + pattern);
	    }
	    router.listen(port);
	}
}

//exports.MvcServer = MvcServer;