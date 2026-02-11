const express = require("express");
const router = express.Router();
const {makeLogout} = require("../controllers/login/makeLogout");


// Função para mapaear ações.
const {actionsMap} = require("../middlewares/actionsMap");

router.use("/",actionsMap,makeLogout);

module.exports = router;