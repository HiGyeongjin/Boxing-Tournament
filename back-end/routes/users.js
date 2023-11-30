const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  const { name, level } = req.user || { name: "NotFound", level: 0 };
  res.send(`USER: ${name}, ${level}`);
});

module.exports = router;
