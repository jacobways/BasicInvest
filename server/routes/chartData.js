const express = require('express');
const router = express.Router();
const chartDataController = require("../controllers/chartData")

router.get('/kospi', chartDataController.kospi);
// router.get('/bdi', chartDataController.bdi);
// router.get('/bondinterest', chartDataController.bondinterest);
// router.get('/consumersales', chartDataController.consumersales);
// router.get('/creditbalance', chartDataController.creditbalance);
// router.get('/employmentrate', chartDataController.employmentrate);
router.get('/exchangerate', chartDataController.exchangeRate);
// router.get('/futuresoptiontrend', chartDataController.futuresoptiontrend);
// router.get('/koreanexport', chartDataController.koreanexport);
// router.get('/oilprice', chartDataController.oilprice);
// router.get('/pmi', chartDataController.pmi);

module.exports = router;
