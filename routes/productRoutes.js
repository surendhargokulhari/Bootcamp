const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.get('/stats/category', productController.getStatsByCategory);
router.get('/average-price', productController.getAveragePriceByCategory);
router.get('/search', productController.searchProducts);
router.get('/filter', productController.complexQuery);

module.exports = router;
