var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000;

console.log(process.env.NODE_ENV)
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join("build", "index.html"));
  });
// } else {
//   app.use(express.static(__dirname + "/"));
// }

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
