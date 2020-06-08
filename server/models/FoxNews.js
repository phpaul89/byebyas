const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const fowNewsSchema = new Schema({
  source: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String,
});

const FoxNews = model("FoxNews", foxNewsSchema);

module.exports = FoxNews;
