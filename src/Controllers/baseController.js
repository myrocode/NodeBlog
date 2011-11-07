var ejs = require('ejs');
var fs = require('fs');
 
var Controller = {
    
    loadViewContent : function(viewName){
        console.log(this.name);
        var pathFromWhereLoadViewFile = __dirname + '/../Views/'+ this.name +'/' + viewName;
        return fs.readFileSync(pathFromWhereLoadViewFile, 'utf8');
    },
    loadModel : function(model){
        var result =  {
            locals: {
                title: 'blog title',
                content: 'blog content'
            }
        };
        return result;
    },
    render : function(viewContent, model){
         return ejs.render(viewContent, model);
    },
    processRequest : function(request, response){
        response.end('welcome');
    },
    process: function (request, response) {
        // load master page and all that needs-...
        // for(var p in self)
        //    console.log('#' + p);
        response.writeHead(200);
        //response.end('welcome');
        //Controller.processRequest(request, response)
       Controller.processRequest(request, response)
    }
};  
exports.Controller = Controller;
exports.process = Controller.process;