import dbConnect from '@/util/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

const handler = async (req, res) => {
	await dbConnect();
	const { method } = req;
	const { body } = req;
	const user = await User.findOne({ email: body.email });
	if (user) {
		res.status(400).json({
			success: false,
			message: 'Email Sisteme Kayıtlı',
		});
		return;
	}
	try {
		const newUser = await User.create(body);
		const salt = await bcrypt.genSalt(10);
		newUser.password = await bcrypt.hash(newUser.password, salt);
		await newUser.save();
		res.status(201).json({ success: true, data: newUser });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};

export default handler;
