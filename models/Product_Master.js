const mongoose = require("mongoose");

const Product_Master_Schema = new mongoose.Schema(
  {
    Product_Name: {
      type: String,
      required: true,
    },
    Rate: {
      type: Number,
      required: true,
    },
    Unit: {
      type: String,
      required: true,
      trim: true,
    },
  },

  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

module.exports = mongoose.model("Product_Master", Product_Master_Schema);
