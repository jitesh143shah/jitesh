const express = require("express");
const { createBlog } = require("../controller/blogController");
const route = express.Router();


route.post("/", createBlog);
module.exports = route;
