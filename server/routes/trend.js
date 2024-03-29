const express = require('express');
const router = express.Router();
const trendController = require("../controllers/trend")

router.get('/koreanexport', trendController.koreanexport);
router.get('/foreignkospi', trendController.foreignkospi);
router.get('/foreignkosdaq', trendController.foreignkosdaq);
router.get('/creditbalance', trendController.creditbalance);
router.get('/employmentrate', trendController.employmentrate);
router.get('/pmi', trendController.pmi);
router.get('/tenminustwo', trendController.tenminustwo);

module.exports = router;