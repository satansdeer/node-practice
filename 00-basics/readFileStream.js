var stream = require("fs").createReadStream("./data.txt", { encoding: "utf8" });

var count = 0;

stream.on("data", function(text) {
  var pattern = /Lorem\ ipsum/g;
  count += text.match(pattern).length;
});

stream.on("end", function() {
  console.log("found", count, "lorem ipsums");
});
