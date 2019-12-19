const fs = require("fs");
const { Transform } = require("stream");

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const writeStream = fs.createWriteStream("./output.txt");

process.stdin.pipe(upperCase).pipe(writeStream);

process.stdin.on("data", data => {
  const s = data.toString();
  console.log("data:", s);

  if (s === "\n") {
    console.log("exit!");
    process.exit(0);
  }
});
