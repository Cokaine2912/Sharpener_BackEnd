const http = require("http");

function rqListener(req, res) {
  //console.log("Niraj Prashant Kamble");
  // process.exit();

  let obj = {
    "/home": "home",
    "/about": "to About Us page",
    "/node": "to my Node Js project",
  };

  console.log(req.url, obj[req.url]);

  res.setHeader("Content-Type", "text/html");
  res.write("<htmtl><title>My First PAge</title></htmtl>");
  res.write(`<body><h1>Welcome ${obj[req.url]}</h1></body>`);
  res.write("</html>");
  res.end();
}

const server = http.createServer(rqListener);

server.listen(4000);
