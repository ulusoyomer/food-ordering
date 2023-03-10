import * as Yum from 'yup';

export const passwordSchema = Yum.object({
	password: Yum.string()
		.min(8, 'Şifreniz en az 8 Karakter uzunluğunda olmalıdır')
		.required('Şifre zorunlu')
		.matches(
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
			'Şifreniz en az 8 Karakter uzunluğunda olmalıdır, büyük harf, küçük harf, sayı ve özel karakter içermelidir'
		),
	newPassword: Yum.string()
		.min(8, 'Şifreniz en az 8 Karakter uzunluğunda olmalıdır')
		.required('Şifre zorunlu')
		.matches(
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
			'Şifreniz en az 8 Karakter uzunluğunda olmalıdır, büyük harf, küçük harf, sayı ve özel karakter içermelidir'
		),
	newPasswordConfirm: Yum.string().oneOf(
		[Yum.ref('newPassword'), null],
		'Şifreler eşleşmiyor'
	),
});
