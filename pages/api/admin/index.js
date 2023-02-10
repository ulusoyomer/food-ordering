import cookie from 'cookie';

const handler = (req, res) => {
	const { method } = req;

	switch (method) {
		case 'POST':
			const { username, password } = req.body;
			if (
				username === process.env.ADMIN_USERNAME &&
				password === process.env.ADMIN_PASSWORD
			) {
				res.setHeader(
					'Set-Cookie',
					cookie.serialize('token', process.env.ADMIN_TOKEN, {
						maxAge: 60 * 60,
						sameSite: 'strict',
						path: '/',
					})
				);
				res.status(200).json({ message: 'Giriş Başarılı' });
			} else {
				res.status(400).json({ message: 'Giriş Bilgileri Yanlış' });
			}
			break;
		case 'PUT':
			res.setHeader(
				'Set-Cookie',
				cookie.serialize('token', process.env.ADMIN_TOKEN, {
					maxAge: -1,
					path: '/',
				})
			);
			res.status(200).json({ message: 'Çıkış Başarılı' });
			break;
		default:
			res.setHeader('Allow', ['POST', 'PUT']);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
};

export default handler;
