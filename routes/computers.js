const express = require("express");
const router = express.Router()

const assetsController = require("../controllers/computers-controller.js");

router
    .route('/assets/computers')
    .get(assetsController.getAssets);

    
module.exports = router;