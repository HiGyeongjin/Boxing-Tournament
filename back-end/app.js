const express = require("express");
const app = express();
const port = 4000;
const usersRouter = require("./routes/users");
const adminRouter = require("./routes/admin");
const setUser = require("./middlewares/set-users");

app.get("/", (req, res) => {
  res.send("OK!");
});

app.use("/users", setUser(), usersRouter);
app.use("/admin", setUser("admin"), adminRouter);

app.listen(port);

//여기서부턴 express.js와 mongoDB를 사용한 코드
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const dayjs = require("dayjs");

const indexRouter = require("./routes");
const postsRouter = require("./routes/posts");

mongoose.connect("mongodb://localhost:27017/simple-board");

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

// const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.locals.formatDate = (date) => {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/posts", postsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
