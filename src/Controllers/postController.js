var ejs = require('ejs');
var basecontroller = require('./baseController');

var PostController = Object.create(basecontroller.Controller); 
PostController.name = 'Post';
PostController.process = function(request, response) {
    var action = request.params.action;
    var id = request.params.id;
    console.log("dirname" + __dirname);
    // why cant use this.loadViewContent ??????
    var view = PostController.loadViewContent(action);
    var model = PostController.loadModel(id);
    var result = PostController.render(view,model);
    
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;
    response.end(result);
    };




/*PostController.process = function(request, response) {
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;
//    response.end(this.loadViewContent('view'));
    var strToRender = "";
    for(var prop in PostController)
    {
        strToRender += prop + '<br />' ;
        }
    response.end(strToRender);
};*/
    
exports.process = PostController.process;
