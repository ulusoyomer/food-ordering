import mongoose from 'mongoose';

const FooterSchema = new mongoose.Schema(
	{
		address: {
			type: String,
			required: true,
			maxlenght: 200,
		},
		phone: {
			type: String,
			required: true,
			maxlenght: 20,
		},
		email: {
			type: String,
			required: true,
			maxlenght: 50,
		},
		description: {
			type: String,
			required: true,
			maxlenght: 200,
		},
		openDays: {
			type: String,
			required: true,
		},
		openHours: {
			type: String,
			required: true,
		},
		facebook: {
			type: String,
		},
		instagram: {
			type: String,
		},
		twitter: {
			type: String,
		},
		youtube: {
			type: String,
		},
	},
	{ timestamps: true }
);

export default mongoose.models.Footer || mongoose.model('Footer', FooterSchema);
