const express = require("express");
const authorRoute = express.Router();
const { authorGet, authorCreate } = require("./author.controllers");
authorRoute.get("/", authorGet);
authorRoute.post("/", authorCreate);
module.exports = authorRoute;
