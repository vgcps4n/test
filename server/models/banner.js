const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BannerSchema = new Schema({
  id: Number,
  name: { type: String, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model("Banner", BannerSchema);
