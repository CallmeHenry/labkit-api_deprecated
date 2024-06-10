const express = require("express");
const router = express.Router()

const computersController = require("../controllers/computers-controller.js");

router
    .route('/assets/computers')
    .get(computersController.getComputers)
    .post(computersController.addSingleComputer);

router
    .route('/assets/computers/:serial')
    .get(computersController.getSingleComputer);

module.exports = router;