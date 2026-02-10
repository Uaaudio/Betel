const express = require("express");
const router = express.Router();

// importando minha funções aqui.
const {createUser} = require("../controllers/admin/createUser");
const {adminDashboard} = require("../controllers/admin/adminDashboard");
const {deleteUser} = require("../controllers/admin/deleteUser");

router.post("/newuser",createUser);
router.use('/deleteuser',deleteUser);
router.get("/dashboard",adminDashboard);



module.exports = router;