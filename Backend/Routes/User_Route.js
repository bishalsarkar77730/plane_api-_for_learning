const express = require("express");
// const userModel = require("../models/users");
const router = express.Router();
const {registerUser, getUsers} = require("../controllers/User_Controller");

router.post("/register", registerUser);
router.get("/users", getUsers);

module.exports = router;
