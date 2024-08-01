const mongoose = require('mongoose');

const TraderSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    bio: {
        type: String,
        default: '',
    },
    performance: {
        type: Number,
        default: 0,
    },
    trades: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trade',
    }],
});

const Trader = mongoose.model('Trader', TraderSchema);
module.exports = Trader;
