const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("first middleware");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("second middleware");
//   res.send("<h1>hello this is second middleware</h1>");
// });

app.use("/users", (req, res, next) => {
  console.log("users middleware");
  res.send("<h1>this is user middleware</h1>");
});
app.use("/", (req, res, next) => {
  console.log("comman middleware");
  res.send("<h1>this is comman middleware</h1>");
});
app.listen(3000);
