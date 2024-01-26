const http = require("http");

function rqListener(req, res) {
  console.log("Niraj Prashant Kamble");
}

const server = http.createServer(rqListener);

server.listen(4000);
