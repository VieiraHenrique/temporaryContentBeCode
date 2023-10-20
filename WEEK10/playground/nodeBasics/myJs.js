const fs = require("fs");

const readStream = fs.createReadStream("./files/hugeText.html");

readStream.on("data", (chunk) => {
  console.log("NEW CHUNK");
  console.log(chunk);
});
