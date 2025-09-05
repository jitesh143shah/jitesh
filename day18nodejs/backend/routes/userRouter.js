const express = require("express");
const {
    getUser,
    createUsers,
    getUserId,
    updateUser,
    deleteUser
} = require("../controller/userController");
const route = express.Router();

route.get("/", getUser);
route.post("/", createUsers);
route.get("/:id", getUserId);
route.post("/:id", updateUser);
route.post("/:id", deleteUser);
module.exports = route;