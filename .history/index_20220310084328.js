const express = require("express");
const http = require("http");
const hostname = "localhost";
const port = 3000;

const app = express();

app.use((req, res, next) => {
  console.log(req.headers);
});
