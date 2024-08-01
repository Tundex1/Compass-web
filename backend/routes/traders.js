const express = require('express');
const Trader = require('../models/Trader');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const traders = await Trader.find();
        res.json(traders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const trader = await Trader.findById(req.params.id).populate('trades');
        if (!trader) {
            return res.status(404).json({ message: 'Trader not found' });
        }
        res.json(trader);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/', async (req, res) => {
    const { username, bio, performance } = req.body;
    try {
        let trader = await Trader.findOne({ username });
        if (trader) {
            trader.bio = bio;
            trader.performance = performance;
            await trader.save();
        } else {
            trader = new Trader({ username, bio, performance });
            await trader.save();
        }
        res.json(trader);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
