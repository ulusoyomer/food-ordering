import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlenght: 32,
	},
});

export default mongoose.models.Category ||
	mongoose.model('Category', CategorySchema);
