import dbConnect from '@/util/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

const handler = async (req, res) => {
	await dbConnect();
	const { method } = req;
	const { body } = req;
	const user = await User.findOne({ email: body.email });
	if (user) {
		return res.status(400).json({
			success: false,
			message: 'Email Sisteme Kayıtlı',
		});
	}
	try {
		const newUser = await User.create(body);
		const salt = await bcrypt.genSalt(10);
		newUser.password = await bcrypt.hash(newUser.password, salt);
		await newUser.save();
		return res.status(201).json({
			success: true,
			data: newUser,
			message: 'Kayıt Başarılı',
		});
	} catch (error) {
		return res.status(400).json({ success: false, message: error.message });
	}
};

export default handler;
