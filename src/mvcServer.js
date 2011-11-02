var port;
var listenOn = '0.0.0.0';
port = process.env.PORT;

function start(routes) {
    //register the controller
    var router = require('router').create();
    for(var pattern in routes)
    {
        router.get(pattern, routes[pattern].process);
        console.log("controller registered for pattern: " + pattern);
    }

router.listen(port); // start the server on port 8080
    
}

exports.start = start;