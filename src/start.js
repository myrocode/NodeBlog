var server = require("./mvcServer");
var postController = require("./Controllers/postController");
var homeController = require("./Controllers/homeController");

var routes = {};
routes["/post/{action}/{id}"] = postController;
routes["/"] = homeController;
server.start(routes);

