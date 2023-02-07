import TitlePrimary from '../../components/ui/TitlePrimary';
import { useFormik } from 'formik';
import { registerSchema } from '@/schema/registerSchema';
import Link from 'next/link';
const RegisterPage = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		onSubmit: (values, actions) => {
			alert(JSON.stringify(values, null, 2));
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
					<Link className="block mt-6 hover:underline" href="/auth/">
						Şifremi Unuttum
					</Link>
				</form>
			</div>
		</div>
	);
};
export default RegisterPage;
