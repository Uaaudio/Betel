const express = require("express");
const router = express.Router();

// função para verificar se existem um usuario online.
const {sessionVerify} = require("../middlewares/sessionVerify");

// importando minha funções aqui.
const {createUser} = require("../controllers/admin/createUser");
const {adminDashboard} = require("../controllers/admin/adminDashboard");
const {deleteUser} = require("../controllers/admin/deleteUser");

router.post("/newuser",sessionVerify,createUser);
router.use('/deleteuser',sessionVerify,deleteUser);
router.get("/dashboard",sessionVerify,adminDashboard);



module.exports = router;