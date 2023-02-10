import dbConnect from '@/util/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

const handler = async (req, res) => {
	await dbConnect();
	const { id } = req.query;
	switch (req.method) {
		case 'GET':
			try {
				const user = await User.findById(id);
				res.status(200).json({ success: true, data: user });
			} catch (error) {
				res.status(404).json({ success: false });
			}
			break;
		case 'PUT':
			try {
				const user = await User.findByIdAndUpdate(id, req.body, {
					new: true,
				});
				res.status(200).json({
					success: true,
					data: user,
					message: 'Kullanıcı Bilgileri Güncellendi',
				});
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'PATCH':
			try {
				const user = await User.findById(id);
				let isMatch = await bcrypt.compare(
					req.body.password,
					user.password
				);
				isMatch = req.body.newPassword === req.body.newPasswordConfirm;
				if (!isMatch) {
					return res.status(400).json({
						success: false,
						message: 'Eski şifre hatalı',
					});
				}
				const salt = await bcrypt.genSalt(10);
				req.body.password = await bcrypt.hash(req.body.newPassword, salt);
				user.password = req.body.password;
				user.save((err, result) => {
					if (err) throw err;
					return res.status(200).json({
						success: true,
						data: result,
						message: 'Şifre Güncellendi',
					});
				});
			} catch (error) {
				return res.status(400).json({ success: false });
			}
			break;
		default:
			return res.status(400).json({ success: false });
	}
};

export default handler;
