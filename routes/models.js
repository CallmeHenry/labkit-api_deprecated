const router = require("express").Router();
const modelsController = require("../controllers/models-controller.js");

router
    .route("/assets/models")
    .post(modelsController.fetchModel);

module.exports = router;