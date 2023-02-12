import * as Yum from 'yup';

export const productSchema = Yum.object({
	name: Yum.string().required('İsim zorunlu'),
	category: Yum.string().required('Kategori zorunlu'),
	image: Yum.string().required('Resim zorunlu'),
	smallPrice: Yum.number()
		.min(0, '0 dan Küçük olamaz')
		.required('Küçük fiyat zorunlu'),
	bigPrice: Yum.number()
		.min(0, '0 dan Küçük olamaz')
		.required('Büyük fiyat zorunlu'),
	description: Yum.string().required('Açıklama zorunlu'),
	mediumPrice: Yum.number()
		.min(0, '0 dan Küçük olamaz')
		.required('Orta fiyat zorunlu'),
});
