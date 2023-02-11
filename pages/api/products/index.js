import dbConnect from '@/util/dbConnect';
import Product from '@/models/Product';

const handler = async (req, res) => {
	await dbConnect();
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const products = await Product.find();
				return res.status(200).json({ success: true, data: products });
			} catch (error) {
				return res
					.status(404)
					.json({ success: false, message: error.message });
			}
		case 'POST':
			try {
				const product = await Product.create(req.body);
				return res
					.status(201)
					.json({ success: true, data: product, message: 'Ürün Eklendi' });
			} catch (error) {
				return res(400).json({ success: false, message: error.message });
			}
		default:
			res.setHeader('Allow', ['GET', 'POST']);
			return res.status(405).json({ success: false });
	}
};

export default handler;
