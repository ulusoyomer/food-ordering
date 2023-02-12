import dbConnect from '@/util/dbConnect';
import Product from '@/models/Product';

const handler = async (req, res) => {
	await dbConnect();
	const {
		method,
		query: { id },
	} = req;

	switch (method) {
		case 'DELETE':
			try {
				const products = await Product.findByIdAndDelete(id);
				return res
					.status(200)
					.json({
						success: true,
						data: products,
						message: 'Ürün Başarıyla Silindi',
					});
			} catch (error) {
				return res
					.status(404)
					.json({ success: false, message: error.message });
			}
		default:
			res.setHeader('Allow', ['DELETE']);
			return res.status(405).json({ success: false });
	}
};

export default handler;
