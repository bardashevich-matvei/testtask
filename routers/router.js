const router = require('express').Router();
const controller = require('../controllers/controller');


router.post('/', controller.addSettings);

router.get('/ethernet', controller.getLastEthernetSettings);

router.get('/wifi', controller.getLastWifiSettings);


module.exports = router;