const express = require("express");
const router = express.Router();

// Minha rota de login.
const {makeLogin} = require("../controllers/login/makeLogin");

router.use("/",makeLogin);

module.exports = router;