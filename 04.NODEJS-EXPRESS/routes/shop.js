const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res, next) => {
  console.log("In another middleware!");
  //res.send("<h1>Hello from Express</h1>");
  //res.sendFile("./view/shop.html");
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
