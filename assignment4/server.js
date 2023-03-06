const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const { userRoutes } = require("./routes/user");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(indexRouter);
app.use(userRoutes);

app.listen(3000);
