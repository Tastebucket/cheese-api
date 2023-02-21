const mongoose = require('mongoose')


const moldSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true,
    },
    diameter: {
        type: Number
    },
})

module.exports = moldSchema