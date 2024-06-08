const router = require("express").Router();
const modelsController = require("../controllers/models-controller.js");

router
    .route("/assets")
    .get(modelsController.getModel);

module.exports = router;