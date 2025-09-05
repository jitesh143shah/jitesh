const express = require("express");
const {
    getUser,
    createUsers,
    getUserId,
    updateUser,
    deleteUser,
    deleteAllUser
} = require("../controller/userController");
const route = express.Router();

route.get("/", getUser);
route.post("/", createUsers);
route.get("/:id", getUserId);
route.patch("/:id", updateUser);
route.delete("/:id", deleteUser);
route.delete("/", deleteAllUser);

module.exports = route;