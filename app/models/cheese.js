const mongoose = require('mongoose')

const moldSchema = require('./mold')

const cheeseSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			required: true,
		},
		isStinky: {
			type: String,
			required: true,
		},
		isSoft: {
			type: Boolean,
			required: true,
		},
		hasHoles: {
			type: Boolean,
			required: true,
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
