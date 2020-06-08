const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const theWashingtonTimesSchema = new Schema({
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

const TheWashingtonTimes = model(
  "TheWashingtontimes",
  theWashingtonTimesSchema
);

module.exports = TheWashingtonTimes;
