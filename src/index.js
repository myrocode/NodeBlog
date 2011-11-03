var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var blogController = require("./Controllers/postController");


var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


var routes = {};
routes["/post/{action}/{id}"] = blogController;

//server.start(router.route, routes);
