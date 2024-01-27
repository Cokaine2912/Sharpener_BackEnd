const http = require("http");

const fs = require("fs");

function rqListener(req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    const fpath = "message.txt";
    let content;
    fs.readFile(fpath, "utf8", (err, data) => {
      content = data;
      //console.log("content", content);

      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write(
        `<body><form action="/message" method="POST">${content}<br><br><input type="text" name="message"><button type="submit">Send</button></form></body>`
      );
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write(`<body><h1>Hello From my Node.js Server</h1></body>`);
    res.write("</html>");
    res.end();
  }
}

const server = http.createServer(rqListener);

server.listen(3000);
