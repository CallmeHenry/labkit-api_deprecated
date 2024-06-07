const router = require("express").Router();
const computersController = require("../controllers/computers-controllers.js");

router
    .route("/assets")
    .get(computersController.getComputer);

module.exports = router;