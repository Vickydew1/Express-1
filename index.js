const express = require("express");
const http = require("http");
const hostname = "localhost";
const morgan = require("morgan");
const port = 3003;

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<html><body><h1>This is a Express Server and fuck u</h1></body></html>"
  );
});

const Server = http.createServer(app);
Server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
