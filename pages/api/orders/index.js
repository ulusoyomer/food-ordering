import dbConnect from '@/util/dbConnect';
import Order from '@/models/Order';

const handler = async (req, res) => {
	await dbConnect();
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const orders = await Order.find();
				return res.status(200).json({ success: true, data: orders });
			} catch (error) {
				return res
					.status(404)
					.json({ success: false, message: error.message });
			}
		case 'POST':
			try {
				const order = await Order.create(req.body);
				return res
					.status(201)
					.json({ success: true, data: order, message: 'Ürün Eklendi' });
			} catch (error) {
				return res(400).json({ success: false, message: error.message });
			}
		default:
			res.setHeader('Allow', ['GET', 'POST']);
			return res.status(405).json({ success: false });
	}
};

export default handler;
