const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");
const routes = require("./routes");

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);
