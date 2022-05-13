const express = require("express");
// const ip = require("ip");
// const moment = require("moment");

const router = express.Router();

// const Index_model = require("../models/Index_model");

router.get("/init", async (req, res) => {
  res.render("init");
});

router.get("/start", async (req, res) => {
  res.render("start");
});

router.get("/practiceDocs", async (req, res) => {
  res.render("practiceDocs");
});

router.get("/practiceGameOne", async (req, res) => {
  res.render("practiceGameOne");
});

module.exports = router;
