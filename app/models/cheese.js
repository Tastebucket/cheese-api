const mongoose = require('mongoose')

const moldSchema = require('./mold')

const cheeseSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			required: true,
		},
		age: {
			type: String,
			required: true
		},
		isStinky: {
			type: String,
			required: true,
			default: false
		},
		isSoft: {
			type: Boolean,
			required: true,
			default: false
		},
		hasHoles: {
			type: Boolean,
			required: true,
			default: false
		},
		mold: [moldSchema],
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Cheese', cheeseSchema)
