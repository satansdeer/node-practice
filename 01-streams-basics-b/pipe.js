const fs = require("fs");
const r = fs.createReadStream("file.txt");
const z = zlib.createGzip();
const w = fs.createWriteStream("file.txt.gz");

r.pipe(z).on("error", (e) => { /* some error processing */}).pipe(w);

// var a = createStream();
// a.on("error", function(e) {
//   handleError(e);
// })
//   .pipe(b)
//   .on("error", function(e) {
//     handleError(e);
//   })
//   .pipe(c)
//   .on("error", function(e) {
//     handleError(e);
//   });
