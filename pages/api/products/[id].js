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
				const product = await Product.findByIdAndDelete(id);
				return res.status(200).json({
					success: true,
					data: product,
					message: 'Ürün Başarıyla Silindi',
				});
			} catch (error) {
				return res
					.status(404)
					.json({ success: false, message: error.message });
			}
		case 'GET':
			try {
				const product = await Product.findById(id);
				return res.status(200).json({
					success: true,
					data: product,
					message: 'Ürün Başarıyla Getirildi',
				});
			} catch (error) {
				return res
					.status(404)
					.json({ success: false, message: error.message });
			}
		default:
			res.setHeader('Allow', ['DELETE', 'GET']);
			return res.status(405).json({ success: false });
	}
};

export default handler;
