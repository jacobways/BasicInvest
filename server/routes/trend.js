const express = require('express');
const router = express.Router();
const trendController = require("../controllers/trend")

router.get('/koreanexport/:date', trendController.koreanexport);
router.get('/foreignkospi', trendController.foreignkospi);
router.get('/foreignkosdaq', trendController.foreignkosdaq);

module.exports = router;