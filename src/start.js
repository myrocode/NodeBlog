var server = require("./mvcServer");
var baseController = require("./Controllers/baseController");
var postController = require("./Controllers/postController");
var homeController = require("./Controllers/homeController");

var routes = {};
routes["/post/{action}/{id}"] = postController;
routes["/test/{action}/{id}"] = baseController;
routes["/"] = homeController;

var mvcServer = server.MvcServer;
mvcServer.routes = routes;
mvcServer.start();

