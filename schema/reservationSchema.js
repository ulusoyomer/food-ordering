import * as Yup from 'yup';

export const reservationSchema = Yup.object({
	name: Yup.string()
		.min(2, '1 karakterden fazla girmelisiniz')
		.max(50, '50 karakterden az girmelisiniz')
		.required('İsim zorunlu'),
	email: Yup.string().email('Email formatı yanlış').required('Email zorunlu'),
	phone: Yup.string()
		.min(10, 'Telefon numarası geçersiz')
		.required('Telefon zorunlu'),
	date: Yup.string().required('Tarih zorunlu'),
	number: Yup.number()
		.min(1)
		.max(12, '12 kişiden fazla rezervasyon yapmazsınız')
		.required('Kişi sayısı zorunlu'),
});
