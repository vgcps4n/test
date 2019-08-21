const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.post("/product", (req, res) => {
  Product.findOne({ name: req.body.name }).then(product => {
    if (product)
      return res.status(400).json({ name: "Бүтээгдэхүүн бүртгэгдсэн байна." });
    const newProduct = new Product({
      name: req.body.name,
      brand: req.body.brand,
      printer: req.body.printer,
      toner: req.body.toner,
      price: req.body.price,
      page: req.body.page
    });
    newProduct
      .save()
      .then(product => res.json(product))
      .catch(err => console.log(err));
  });
});

router.get("/product", (req, res) => {
  Product.find((err, products) => {
    if (err) return res.status(404).json(err);
    return res.status(200).json(products);
  });
});

module.exports = router;
