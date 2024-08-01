const express = require('express');
const Trade = require('../models/Trade');
const Trader = require('../models/Trader');
const User = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
    const { traderId, tradeDetails } = req.body;
    try {
        const trader = await Trader.findById(traderId);
        if (!trader) {
            return res.status(404).json({ message: 'Trader not found' });
        }

        const trade = new Trade({ trader: traderId, tradeDetails });
        await trade.save();

        trader.trades.push(trade);
        await trader.save();

        res.json(trade);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/copy/:tradeId', async (req, res) => {
    const { userId } = req.body;
    try {
        const trade = await Trade.findById(req.params.tradeId);
        if (!trade) {
            return res.status(404).json({ message: 'Trade not found' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        trade.copiedBy.push(userId);
        await trade.save();

        res.json(trade);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/', async (req, res) => {
    try {
        const trades = await Trade.find().populate('trader');
        res.json(trades);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
