const fs = require("fs");
const http = require("http");

const server = http.createServer(function (request, response) {
    console.log(request);
    response.end("hello");
});

server.listen(5000, () => {
    console.log("Server started")

})