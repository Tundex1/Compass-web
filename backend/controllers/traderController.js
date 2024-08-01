const Trader = require("../models/Trader");

exports.getTraders = async (req, res) => {
  try {
    const traders = await Trader.find();
    res.status(200).json({ success: true, data: traders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getTrader = async (req, res) => {
  try {
    const trader = await Trader.findById(req.params.id);
    if (!trader) {
      return res
        .status(404)
        .json({ success: false, error: "Trader not found" });
    }
    res.status(200).json({ success: true, data: trader });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.createTrader = async (req, res) => {
  const { name, roi, risk, tradingStrategy, historicalPerformance } = req.body;

  try {
    const trader = await Trader.create({
      name,
      roi,
      risk,
      tradingStrategy,
      historicalPerformance,
    });
    res.status(201).json({ success: true, data: trader });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
