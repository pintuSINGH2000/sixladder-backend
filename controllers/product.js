const Product_Master = require("../models/Product_Master");

const createProductController = async (req, res) => {
    try {
        const { productName, rate, unit } = req.body;
        if (!productName || !rate || !unit) {
          return res.status(400).json({ error: "All fields are required" });
        }

        const newProduct = new Product_Master({
          Product_Name:productName,
          Rate:rate,
          Unit:unit,
        });
    
        const product = await newProduct.save();
    
        res.status(201).json({
          message: "Product added successfully",
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to add product", details: error.message });
      }
}

const getProductController = async (req, res) => {
  try {
    const products = await Product_Master.find(); 
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products", details: error.message });
  }
}

module.exports = {
    createProductController,
    getProductController
  };