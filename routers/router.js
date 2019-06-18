const router = require('express').Router();
const controller = require('../controllers/controller');


router.post('/', controller.addSettings);

router.get('/', controller.getLastSettings);


module.exports = router;