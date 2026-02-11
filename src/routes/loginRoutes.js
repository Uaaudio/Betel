const express = require("express");
const router = express.Router();

// Função para mapaear ações.
const {actionsMap} = require("../middlewares/actionsMap");

// Minha rota de login.
const {makeLogin} = require("../controllers/login/makeLogin");
const {makeLogout} = require("../controllers/login/makeLogout");

router.use("/",actionsMap,makeLogin);


module.exports = router;