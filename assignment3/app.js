const express = require("express");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const path = require("path");
const globalPath = require("./utils/path");
const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(globalPath, "public")));

app.use(indexRouter);
app.use(usersRouter);
app.listen(3000, () => {
  console.log("we are running at port 3000");
});
