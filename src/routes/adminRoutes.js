const express = require("express");
const router = express.Router();
const {createUser} = require("../controllers/admin/createUser");

router.post("/newuser",createUser);


module.exports = router;