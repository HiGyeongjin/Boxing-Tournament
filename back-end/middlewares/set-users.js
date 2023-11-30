const users = require("../data/users.json");
const admins = require("../data/admins.json");

const setUser = (type) => (req, res, next) => {
  const { userName } = req.query;
  if (type === "admin") {
    req.user = admins[userName];
    next();
    return;
  }
  req.user = users[userName];
  next();
};

module.exports = setUser;
