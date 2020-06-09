const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

router.get("/", (req, res, err) => {
  Article.find()
    .then((articles) => {
      res.status(200).json({ articles: articles });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

module.exports = router;
