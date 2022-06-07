const apiReadme = "./store/misc/readme.txt";
let readmeFile;
const fs = require("fs");

function lol() {
fs.readFile(apiReadme, "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  readmeFile = data;
  console.log(readmeFile);
});
}

module.exports = {
  lol: lol,
  readmeFile: readmeFile,
};
