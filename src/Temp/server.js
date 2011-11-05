var http = require("http");
var url = require("url");



function start(route, handle) {
    var port;
    var listenOn = '0.0.0.0';
    port = process.env.PORT;
    http.createServer(onRequest).listen(port, listenOn,serverCreated_callback());
    
    // callbacks
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for"+ pathname +" received.");
        request.setEncoding("utf8");
        
        request.addListener("data", function(postDataChunk) {
          postData += postDataChunk;
          console.log("Received POST data chunk '"+
          postDataChunk + "'.");
        });
        request.addListener("end", function() {
         console.log("Done receiving post data:" + postData);
          route(handle, pathname, response, postData);
        });
    }
    function serverCreated_callback(){
        console.log('server is running on http://' + listenOn + ':' + port );
    }
    
}

exports.start = start;