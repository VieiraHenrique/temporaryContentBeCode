const fs = require("fs");

const readstream = fs.createReadStream("./test/hugeText.html", {});

const writeStream = fs.createWriteStream("./test/newText.html");

readstream.on("data", (chunk) => {
  console.log("---- NEW CHUNK ----");
  console.log(chunk);

  writeStream.write("\n NEW CHUNK \n");
  writeStream.write(chunk);
});
