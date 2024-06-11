const router = require("express").Router();
const modelsController = require("../controllers/models-controller.js");

router
    .route("/assets/models")
    .post(modelsController.fetchModel);

router
    .route("/assets/models/:model")
    .get(modelsController.fetchModelFromDB);

module.exports = router;