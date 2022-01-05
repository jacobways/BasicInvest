const express = require('express');
const router = express.Router();
const chartDataController = require("../controllers/chartData")

router.get('/kospi', chartDataController.kospi);
router.get('/kosdaq', chartDataController.kosdaq);
router.get('/foreignKospi', chartDataController.foreignKospi);
router.get('/foreignKosdaq', chartDataController.foreignKosdaq);
router.get('/dow', chartDataController.dow);
router.get('/nasdaq', chartDataController.nasdaq);
router.get('/bdi', chartDataController.bdi);
router.get('/tenminustwo', chartDataController.tenminustwo);
router.get('/creditbalance', chartDataController.creditbalance);
router.get('/employmentrate', chartDataController.employmentrate);
router.get('/exchangerate', chartDataController.exchangerate);
router.get('/koreanexport', chartDataController.koreanexport);
router.get('/oilprice', chartDataController.oilprice);
router.get('/hotrolled', chartDataController.hotrolled);
router.get('/pmi', chartDataController.pmi);
router.get('/vix', chartDataController.vix);

module.exports = router;
