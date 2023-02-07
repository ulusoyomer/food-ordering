import Link from 'next/link';
import TitlePrimary from '../../components/ui/TitlePrimary';
import { FaGoogle } from 'react-icons/fa';
import { useFormik } from 'formik';
import { adminSchema } from '../../schema/adminSchema';
const LoginPage = () => {
	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		onSubmit: (values, actions) => {
			alert(JSON.stringify(values, null, 2));
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
export default LoginPage;
