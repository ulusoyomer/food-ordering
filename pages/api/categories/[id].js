import dbConnect from '@/util/dbConnect';
import Category from '@/models/Category';

const handler = async (req, res) => {
	await dbConnect();
	const { id } = req.query;
	switch (req.method) {
		case 'DELETE':
			try {
				const category = await Category.findByIdAndDelete(id);
				if (!category) {
					return res
						.status(404)
						.json({ success: false, message: 'Kategori Bulunamadı' });
				}
				return res.status(200).json({
					success: true,
					data: category,
					message: 'Kategori silindi',
				});
			} catch (error) {
				return res.status(400).json({ success: false });
			}
		default:
			res.setHeader('Allow', ['DELETE']);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
};

export default handler;
