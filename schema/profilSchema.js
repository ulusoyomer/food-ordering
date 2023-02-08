import * as Yum from 'yup';

export const profileSchema = Yum.object({
	email: Yum.string()
		.email('Email formatı doğru değil')
		.required('Email zorunlu'),
	name: Yum.string().required('İsim zorunlu'),
	tel: Yum.string().nullable(),
	address: Yum.string().nullable(),
});
