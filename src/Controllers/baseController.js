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
                names: ['foo', 'bar', 'baz'],
            }
        }
        return result;
    },
    render : function(viewContent, model){
         return ejs.render(viewContent, model);
    },
    process: function (request, response) {
        var base = request.params.base;
        response.writeHead(200);
        response.end('welcome');
    }
}

    
exports.Controller = Controller;