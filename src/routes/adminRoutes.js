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
const { editUser } = require("../controllers/admin/editUser");
const {patiosOfmonth} = require("../controllers/admin/seePatios");
const {prayerCircleOfmonth} = require("../controllers/admin/seePrayerCircle");

const {patioUpdateValue} = require("../controllers/admin/patioUpdateValue");
const {prayerCirlceUpdateValue} = require("../controllers/admin/prayerCircleUpdateValue");


router.post("/newuser",actionsMap,sessionVerify,createUser);
router.use('/deleteuser',actionsMap,sessionVerify,deleteUser);
router.get("/dashboard",actionsMap,sessionVerify,adminDashboard);
router.put("/edituser",actionsMap,sessionVerify,editUser);
router.use("/seepatios",actionsMap,sessionVerify,patiosOfmonth);
router.use("/seeprayercircles",actionsMap,sessionVerify,prayerCircleOfmonth);
router.use("/patioupdate",actionsMap,sessionVerify,patioUpdateValue);
router.use("/prayercircleupdate",actionsMap,sessionVerify,prayerCirlceUpdateValue);




module.exports = router;