// Single Thread , Event Loop and Blocking Code
const http = require("http");

const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000);
