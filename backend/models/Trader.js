const mongoose = require("mongoose");

const TraderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roi: {
    type: Number,
    required: true,
  },
  risk: {
    type: String,
    required: true,
  },
  tradingStrategy: {
    type: String,
    required: true,
  },
  historicalPerformance: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Trader", TraderSchema);
