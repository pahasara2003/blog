var fs = require("fs");

// Use fs.readFile() method to read the file
fetch(
  "https://raw.githubusercontent.com/pahasara2003/Byteburst/main/style.css"
).then((res) => console.log(res.text()));

console.log("readFile called");
