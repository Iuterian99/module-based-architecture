const express = require("express");

const router = express.Router();

const Users = require("./users/users");

router.get("/", Users.Users).get("/users/:id", Users.GET_BY_ID);
router.put("put", Users.UpdateUsers);

module.exports = router;
