const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reutersSchema = new Schema({
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

const Reuters = model("Reuters", reutersSchema);

module.exports = Reuters;
