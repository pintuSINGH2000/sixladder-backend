const express = require("express");
const { createInvoiceController } = require("../controllers/invoice");
const router = express.Router();

router.post("/",createInvoiceController);

module.exports = router;