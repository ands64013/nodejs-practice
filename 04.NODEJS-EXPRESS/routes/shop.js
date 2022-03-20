// const express = require("express");
// const router = express.Router();
// const path = require("path");
// const rootDir = require("../util/path");
// const adminData = require("./admin");

// router.get("/", (req, res, next) => {
//   // console.log("shop.js", adminData.products);
//   // res.sendFile(path.join(rootDir, "views", "shop.html"));
//   res.render("shop");
// });

// module.exports = router;

const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop");
});

module.exports = router;
