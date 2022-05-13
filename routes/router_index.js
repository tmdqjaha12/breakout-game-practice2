const express = require("express");
const router = express.Router();

const HomeRouter = require("./index");

router.use("/Phaser", HomeRouter);

module.exports = router;
