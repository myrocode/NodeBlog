var ejs = require('ejs');
var fs = require('fs');

function process(request, response) {
    var action = request.params.action;
    var id = request.params.id;
    console.log("dirname" + __dirname);
    var str = fs.readFileSync(__dirname + '/../Views/Post/view', 'utf8');
    var ret = ejs.render(str, {
      locals: {
        names: ['foo', 'bar', 'baz'],
        id: id,
        action: action
      }
    });
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;
    response.end(ret);
}

exports.process = process;