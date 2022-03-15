const express = require("express");
const router = express.Router();
const path = require("path");

// admin/add-product => GET
router.use("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  // res.send(
  //   '<form action ="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  // );
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// admin/add-product => POST
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
