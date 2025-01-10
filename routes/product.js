const express = require("express");
const { createProductController, getProductController } = require("../controllers/product");
const router = express.Router();

router.post("/",createProductController);
router.get("/",getProductController);

module.exports = router;