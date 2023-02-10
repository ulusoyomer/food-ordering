import mongoose, { models } from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		tel: {
			type: String,
		},
		address: {
			type: String,
		},
		password: {
			type: String,
			required: true,
		},
		emailVerified: {
			type: String,
			default: null,
		},
	},
	{ timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
