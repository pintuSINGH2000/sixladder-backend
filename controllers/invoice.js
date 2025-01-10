const Invoice_Detail = require("../models/Invoice_Detail");
const Invoice_Master = require("../models/Invoice_Master");

const createInvoiceController = async (req, res) => {
  try {
    const { customerName, products } = req.body;
    if (!customerName || typeof customerName !== "string") {
      return res.status(400).send({ errorMessage: "Invalid Customer Name" });
    }

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).send({ errorMessage: "Invalid Products" });
    }
    const totalAmount = products.reduce(
      (sum, product) => {
        const productTotal = parseFloat(product.totalAmount);
        if (isNaN(productTotal) || productTotal < 0) {
          return res.status(400).send({ errorMessage: "Bad Request" });
        }
        return sum + productTotal;
      }
    ,0);

    const lastInvoice = await Invoice_Master.findOne().sort({ invoiceNo: -1 });
    const invoiceNo = lastInvoice ? lastInvoice.Invoice_no + 1 : 1;
    const newInvoiceMaster = new Invoice_Master({
      Invoice_no: invoiceNo,
      CustomerName: customerName,
      TotalAmount: totalAmount,
    });
    const savedInvoiceMaster = await newInvoiceMaster.save();

    const invoiceDetails = products.map((product) => ({
      Invoice_Id: savedInvoiceMaster._id,
      Product_Id: product.productId,
      Rate: product.rate,
      Unit: product.unit,
      Qty: product.qty,
      Disc_Percentage: product.disc,
      NetAmount: product.netAmount,
      TotalAmount: parseFloat(product.totalAmount),
    }));

    await Invoice_Detail.insertMany(invoiceDetails);

    res.status(201).json({ message: "Product Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createInvoiceController,
};
