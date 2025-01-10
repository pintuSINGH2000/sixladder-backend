const mongoose = require("mongoose");

const Invoice_Master_Schema = new mongoose.Schema(
  {
    Invoice_no: {
      type: Number,
      required: true,
    },
    CustomerName: {
      type: String,
      require: true,
      trim: true,
    },
    TotalAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

module.exports = mongoose.model("Invoice_Master", Invoice_Master_Schema);
