const mongoose = require('mongoose')


const moldSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true,
    },
    isFuzzy: {
        type: Boolean
    },
    diameter: {
        type: Number
    },
})

module.exports = moldSchema