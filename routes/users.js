var express = require("express");
const { signup, login } = require("../controllers/userController");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;