import TitlePrimary from '../../components/ui/TitlePrimary';
import { useFormik } from 'formik';
import { registerSchema } from '@/schema/registerSchema';
import Link from 'next/link';
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const RegisterPage = () => {
	const { push } = useRouter();

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		onSubmit: async (values, actions) => {
			try {
				const response = await axios.post(
					`${process.env.NEXT_PUBLIC_API_URL}/users/register`,
					values
				);

				if (response.data.success) {
					toast.success(response.data.message, {
						position: toast.POSITION.TOP_RIGHT,
					});
					push('/auth/login');
				}
			} catch (error) {
				if (!error.response.data.success) {
					toast.error(error.response.data.message, {
						position: toast.POSITION.TOP_RIGHT,
					});
				}
			}

			actions.resetForm();
		},
		validationSchema: registerSchema,
	});
	return (
		<div className="login">
			<TitlePrimary>Kayıt Ol</TitlePrimary>
			<div className="login__container">
				<form onSubmit={formik.handleSubmit}>
					<input
						className={
							formik.touched.email && formik.errors.email
								? 'input u--alert-border'
								: 'input'
						}
						type={'text'}
						name={'name'}
						id={'name'}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
						placeholder={'İsminiz'}
					/>
					<p className="u--alert">
						&nbsp;
						{formik.touched.name && formik.errors.name
							? '*' + formik.errors.name
							: ' '}
					</p>
					<input
						className={
							formik.touched.email && formik.errors.email
								? 'input u--alert-border'
								: 'input'
						}
						type={'email'}
						name={'email'}
						id={'email'}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
						placeholder={'Email'}
					/>
					<p className="u--alert">
						&nbsp;
						{formik.touched.email && formik.errors.email
							? '*' + formik.errors.email
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
					<input
						className={
							formik.touched.confirmPassword &&
							formik.errors.confirmPassword
								? 'input u--alert-border'
								: 'input'
						}
						name="confirmPassword"
						id="confirmPassword"
						onChange={formik.handleChange}
						value={formik.values.confirmPassword}
						onBlur={formik.handleBlur}
						type={'password'}
						placeholder={'Şifre Tekrar'}
					/>
					<p className="u--alert">
						&nbsp;
						{formik.touched.confirmPassword &&
						formik.errors.confirmPassword
							? '*' + formik.errors.confirmPassword
							: ' '}
					</p>
					<button
						type="submit"
						className="btn btn-secondary--rounded w-full mt-3"
					>
						Kayıt Ol
					</button>
					<Link className="block mt-3 hover:underline" href="/auth/login">
						Giriş Yap
					</Link>
					<Link className="block mt-3 hover:underline" href="/auth/">
						Şifremi Unuttum
					</Link>
				</form>
			</div>
		</div>
	);
};
export default RegisterPage;
