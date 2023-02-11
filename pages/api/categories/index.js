import dbConnect from '@/util/dbConnect';
import Category from '@/models/Category';

const handler = async (req, res) => {
	await dbConnect();
	switch (req.method) {
		case 'GET':
			try {
				const categories = await Category.find();
				return res.status(200).json({ success: true, data: categories });
			} catch (error) {
				return res.status(400).json({ success: false });
			}
		case 'POST':
			try {
				const category = await Category.create(req.body);
				return res.status(201).json({
					success: true,
					data: category,
					message: 'Yeni kategori eklendi',
				});
			} catch (error) {
				return res.status(400).json({ success: false });
			}
		default:
			res.setHeader('Allow', ['GET', 'POST']);
			res.status(405).end(`Method ${method} Not Allowed`);
			break;
	}
};

export default handler;
