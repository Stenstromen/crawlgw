const apiReadme = "../store/misc/readme.txt";
let readmeFile;
const fs = require("fs");

// NEEDS TO BE FUNCTION!
fs.readFile(apiReadme, "utf8", (err, data) => {
  readmeFile = data;
  processFile(readmeFile);
});

function processFile(content) {
    console.log(content);
}

module.exports = {
  readmeFile: readmeFile,
};
