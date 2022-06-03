const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const app = express();

app.use(bodyParser.json());

const crawlRouter = express.Router();
const gwRouter = express.Router();

