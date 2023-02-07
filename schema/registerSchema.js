import * as Yum from 'yup';

export const registerSchema = Yum.object({
	email: Yum.string()
		.email('Email formatı doğru değil')
		.required('Email zorunlu'),
	password: Yum.string()
		.min(8, 'Şifreniz en az 8 Karakter uzunluğunda olmalıdır')
		.required('Şifre zorunlu')
		.matches(
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
			'Şifreniz en az 8 Karakter uzunluğunda olmalıdır, büyük harf, küçük harf, sayı ve özel karakter içermelidir'
		),
	confirmPassword: Yum.string().oneOf(
		[Yum.ref('password'), null],
		'Şifreler eşleşmiyor'
	),
});
