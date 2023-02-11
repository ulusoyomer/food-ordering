import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			maxlenght: 32,
		},
		description: {
			type: String,
			required: true,
			maxlenght: 250,
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		prices: {
			type: [Number],
			required: true,
		},
		extras: {
			type: [
				{
					name: { type: String, required: true },
					price: { type: Number, required: true },
				},
			],
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.models.Product ||
	mongoose.model('Product', ProductSchema);
