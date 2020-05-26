var express = require("express");
var path = require('path');
var app = express();
const PORT = process.env.PORT || 3000;

console.log(process.env.NODE_ENV)
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"build", "index.html"));
  });
// } else {
//   app.use(express.static(__dirname + "/index.html"));
// }

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

