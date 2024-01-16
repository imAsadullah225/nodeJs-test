const express = require('express');
const { addUser, getUser, getUsers } = require('./controller/userController')


const router = express.Router()

router.get("/getUsers", getUsers);
router.post("/addUser", addUser);
router.get("/getUser/:id", getUser);

module.exports = router;