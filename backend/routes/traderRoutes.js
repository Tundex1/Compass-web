const express = require("express");
const {
  getTraders,
  getTrader,
  createTrader,
} = require("../controllers/traderController");
const router = express.Router();

router.get("/", getTraders);
router.get("/:id", getTrader);
router.post("/", createTrader);

module.exports = router;
