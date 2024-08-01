const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
    trader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trader',
        required: true,
    },
    tradeDetails: {
        type: Object,
        required: true,
    },
    copiedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const Trade = mongoose.model('Trade', TradeSchema);
module.exports = Trade;
