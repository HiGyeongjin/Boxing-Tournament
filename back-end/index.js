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
