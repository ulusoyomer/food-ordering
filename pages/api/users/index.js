import dbConnect from '@/util/dbConnect';
import User from '@/models/User';

const handler = async (req, res) => {
	await dbConnect();
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const users = await User.find();
				res.status(200).json({ success: true, data: users });
			} catch (error) {}
			break;
		case 'POST':
			try {
				const user = await User.create(req.body);
				res.status(201).json({ success: true, data: user });
			} catch (error) {
				res.status(400).json({ success: false });
			}
		default:
			res.status(400).json({ success: false });
			break;
	}
};

export default handler;
