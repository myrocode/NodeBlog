var http = require("http");

function start() {
    function onRequest(request, response) {
        console.log("Request received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    function serverCreated_callback(){
        console.log('Http Server started');
    }
    
    http.createServer(onRequest).listen(process.env.PORT, "0.0.0.0",serverCreated_callback());
}

exports.start = start;