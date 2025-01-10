const mongoose = require("mongoose");

const Invoice_Detail_Schema = new mongoose.Schema(
  {
    Invoice_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice_Master",
      required: true,
    },
    Product_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product_Master",
      required: true,
    },
    Rate: {
      type: Number,
      required: true,
    },
    Unit: {
      type: String,
      required: true,
    },
    Qty: {
      type: Number,
      required: true,
    },
    Disc_Percentage: {
      type: Number,
      required: true,
    },
    NetAmount: {
      type: Number,
      required: true,
    },
    TotalAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

module.exports = mongoose.model("Invoice_Detail", Invoice_Detail_Schema);
