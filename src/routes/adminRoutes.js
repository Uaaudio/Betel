const express = require("express");
const router = express.Router();

// função para verificar se existem um usuario online.
const {sessionVerify} = require("../middlewares/sessionVerify");

// Função para mapaear ações.
const {actionsMap} = require("../middlewares/actionsMap");

// importando minha funções aqui.
const {createUser} = require("../controllers/admin/createUser");
const {adminDashboard} = require("../controllers/admin/adminDashboard");
const {deleteUser} = require("../controllers/admin/deleteUser");

router.post("/newuser",actionsMap,sessionVerify,createUser);
router.use('/deleteuser',actionsMap,sessionVerify,deleteUser);
router.get("/dashboard",actionsMap,sessionVerify,adminDashboard);



module.exports = router;