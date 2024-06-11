const express = require("express");
const router = express.Router()

const computersController = require("../controllers/computers-controller.js");

router
    .route('/assets/computers')
    .get(computersController.getComputers)
    .post(computersController.addSingleComputer)
    .put(computersController.updateSingleComputer);

router
    .route('/assets/computers/:serial')
    .get(computersController.getSingleComputer)
    .delete(computersController.deleteSingleComputer);


module.exports = router;