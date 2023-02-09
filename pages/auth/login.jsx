import Link from 'next/link';
import TitlePrimary from '../../components/ui/TitlePrimary';
import { FaGithub } from 'react-icons/fa';
import { useFormik } from 'formik';
import { loginSchema } from '../../schema/loginSchema';
import { useSession, signIn } from 'next-auth/react';

const LoginPage = () => {
	const { data: session } = useSession();
	console.log(session);
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values, actions) => {
			alert(JSON.stringify(values, null, 2));
			actions.resetForm();
		},
		validationSchema: loginSchema,
	});
	return (
		<div className="login">
			<TitlePrimary>Giriş Yap</TitlePrimary>
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
					<button
						type="submit"
						className="btn btn-secondary--rounded w-full mt-3"
					>
						Giriş Yap
					</button>
					<button
						type="button"
						onClick={() => signIn('github')}
						className="btn btn-primary--rounded btn-primary--no-hover w-full mt-5 text-center"
					>
						<FaGithub className="inline" /> Github İle Giriş Yap
					</button>
					<Link
						className="block mt-6 hover:underline"
						href="/auth/register"
					>
						Üye Ol
					</Link>

					<Link className="block mt-6 hover:underline" href="/auth/">
						Şifremi Unuttum
					</Link>
				</form>
			</div>
		</div>
	);
};
export default LoginPage;
