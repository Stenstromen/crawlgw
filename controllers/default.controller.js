const model = require("../models/default.model");

function printReadme(req, res) {
    //res.write(model.readmeFile);
    model.lol();
    res.end(model.readmeFile);
}

module.exports = {
    printReadme: printReadme,
}