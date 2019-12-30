const http = require("http");

http.createServer((request, response) => {
    response.write("server 2 is online")
    response.end();
}).listen(4001);