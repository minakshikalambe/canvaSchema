const mongoose = require("mongoose");


const brandSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    fonturl:{type: String, required: true}
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

const Brand = mongoose.model("brand", brandSchema);

module.exports = Brand;