const express = require("express");
const router = express.Router();

// importando minha funções aqui.
const {createUser} = require("../controllers/admin/createUser");
const {adminDashboard} = require("../controllers/admin/adminDashboard");

router.post("/newuser",createUser);
router.get("/dashboard",adminDashboard);



module.exports = router;