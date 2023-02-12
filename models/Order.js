import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
	{
		customer: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		address: {
			type: String,
			required: true,
			maxlenght: 200,
		},
		total: {
			type: Number,
			required: true,
		},
		status: {
			type: Number,
			required: true,
		},
		method: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
