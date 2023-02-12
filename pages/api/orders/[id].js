import dbConnect from '@/util/dbConnect';
import Order from '@/models/Order';

const handler = async (req, res) => {
	await dbConnect();
	const {
		method,
		query: { id },
	} = req;

	switch (method) {
		case 'DELETE':
			try {
				const order = await Order.findByIdAndDelete(id);
				if (!order) {
					return res
						.status(404)
						.json({ success: false, message: 'Sipariş Bulunamadı' });
				}
				return res.status(200).json({
					success: true,
					data: order,
					message: 'Ürün Başarıyla Silindi',
				});
			} catch (error) {
				return res
					.status(404)
					.json({ success: false, message: error.message });
			}
		case 'GET':
			try {
				const order = await Order.findById(id);
				if (!order) {
					return res
						.status(404)
						.json({ success: false, message: 'Sipariş Bulunamadı' });
				}
				return res.status(200).json({
					success: true,
					data: order,
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
