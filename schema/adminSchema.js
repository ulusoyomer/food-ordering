import * as Yum from 'yup';

export const adminSchema = Yum.object({
	username: Yum.string().required('Kullanıcı Adı zorunlu'),
	password: Yum.string()
		.min(3, 'Şifreniz en az 3 Karakter uzunluğunda olmalıdır')
		.required('Şifre zorunlu'),
});
