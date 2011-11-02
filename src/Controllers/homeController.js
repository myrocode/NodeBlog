function process(request, response) {
    var base = request.params.base;
    response.writeHead(200);
    response.end('welcome');
}

exports.process = process;