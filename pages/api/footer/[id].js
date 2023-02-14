import dbConnect from '@/util/dbConnect';
import Footer from '@/models/Footer';

const handler = async (req, res) => {
	await dbConnect();
	const {
		method,
		query: { id },
	} = req;

	switch (method) {
		case 'PUT':
			try {
				const footer = await Footer.findByIdAndUpdate(id, req.body, {
					new: true,
				});
				if (!footer) {
					return res
						.status(404)
						.json({ success: false, message: 'Sipariş Bulunamadı' });
				}
				return res.status(200).json({
					success: true,
					data: footer,
					message: 'Sipariş Bilgileri Güncellendi',
				});
			} catch (error) {
				return res.status(400).json({ success: false });
			}
		default:
			res.setHeader('Allow', ['DELETE', 'GET']);
			return res.status(405).json({ success: false });
	}
};

export default handler;
