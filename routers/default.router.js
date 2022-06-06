const express = require("express");
const defaultController = require("../controllers/default.controller");
const defaultRouter = express.Router();

defaultRouter.get("/api", defaultController.printReadme);

module.exports = defaultRouter;