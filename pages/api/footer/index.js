import dbConnect from '@/util/dbConnect';
import Footer from '@/models/Footer';

const handler = async (req, res) => {
	await dbConnect();
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const footers = await Footer.find();
				return res.status(200).json({ success: true, data: footers });
			} catch (error) {
				return res
					.status(404)
					.json({ success: false, message: error.message });
			}
		case 'POST':
			try {
				const footer = await Footer.create(req.body);
				return res.status(201).json({
					success: true,
					data: footer,
					message: 'Site Ayarları Eklendi',
				});
			} catch (error) {
				return res
					.status(400)
					.json({ success: false, message: error.message });
			}
		default:
			res.setHeader('Allow', ['GET', 'POST']);
			return res.status(405).json({ success: false });
	}
};

export default handler;
