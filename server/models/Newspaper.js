const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const newspaperSchema = new Schema({
  name: String,
  source_name: String,
  articles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Article",
    },
  ],
});

const Newspaper = model("Newspaper", newspaperSchema);

module.exports = Newspaper;
