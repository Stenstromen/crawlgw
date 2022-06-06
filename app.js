const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const app = express();
const defaultRouter = require("./routers/default.router");

app.use(bodyParser.json());

//const crawlRouter = express.Router();
//const gwRouter = express.Router();

app.use(defaultRouter);

app.listen(8080, () => {
    console.log("Server running on localhost:8080");
  });