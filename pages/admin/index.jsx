import TitlePrimary from '../../components/ui/TitlePrimary';
import { useFormik } from 'formik';
import { adminSchema } from '../../schema/adminSchema';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
const LoginPage = () => {
	const { push } = useRouter();

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		onSubmit: async (values, actions) => {
			const { username, password } = values;
			try {
				const response = await axios.post(
					process.env.NEXT_PUBLIC_API_URL + '/admin',
					{
						username,
						password,
					}
				);
				if (response.status === 200) {
					toast.success(response.data.message, {
						position: toast.POSITION.TOP_RIGHT,
					});
					push('/admin/profile');
				}
			} catch (error) {
				if (!error.response.status === 400) {
					toast.error(error.response.data.message, {
						position: toast.POSITION.TOP_RIGHT,
					});
				}
			}
			actions.resetForm();
		},
		validationSchema: adminSchema,
	});
	return (
		<div className="login">
			<TitlePrimary>Admin Giriş Yap</TitlePrimary>
			<div className="login__container">
				<form onSubmit={formik.handleSubmit}>
					<input
						className={
							formik.touched.email && formik.errors.email
								? 'input u--alert-border'
								: 'input'
						}
						type={'text'}
						name={'username'}
						id={'username'}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.username}
						placeholder={'Kullanıcı Adı'}
					/>
					<p className="u--alert">
						&nbsp;
						{formik.touched.username && formik.errors.username
							? '*' + formik.errors.username
							: ' '}
					</p>
					<input
						className={
							formik.touched.password && formik.errors.password
								? 'input u--alert-border'
								: 'input'
						}
						name="password"
						id="password"
						onChange={formik.handleChange}
						value={formik.values.password}
						onBlur={formik.handleBlur}
						type={'password'}
						placeholder={'Şifre'}
					/>
					<p className="u--alert">
						&nbsp;
						{formik.touched.password && formik.errors.password
							? '*' + formik.errors.password
							: ' '}
					</p>
					<button
						type="submit"
						className="btn btn-secondary--rounded w-full mt-3"
					>
						Giriş Yap
					</button>
				</form>
			</div>
		</div>
	);
};

export const getServerSideProps = async (context) => {
	const myCookie = context.req?.cookies ?? '';
	if (myCookie.token === process.env.ADMIN_TOKEN) {
		return {
			redirect: {
				destination: '/admin/profile',
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
};

export default LoginPage;
