import TitlePrimary from '../ui/TitlePrimary';
import { useFormik } from 'formik';

const BookTable = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			phone: '',
			email: '',
			number: '',
			date: '',
		},
		onSubmit: (values, actions) => {
			alert(JSON.stringify(values, null, 2));
			actions.resetForm();
		},
	});
	return (
		<div className="book-table">
			<div className="book-table__form">
				<TitlePrimary>Rezervasyon Yap</TitlePrimary>
				<form onSubmit={formik.handleSubmit}>
					<div className="form-group relative">
						<input
							className="input"
							type="text"
							id="name"
							name="name"
							value={formik.values.name}
							onChange={formik.handleChange}
							placeholder="Adınız"
						/>
					</div>
					<div className="form-group relative">
						<input
							className="input"
							type="tel"
							id="phone"
							name="phone"
							value={formik.values.phone}
							onChange={formik.handleChange}
							placeholder="Telefon Numaranız"
						/>
					</div>
					<div className="form-group relative">
						<input
							className="input"
							type="email"
							id="email"
							name="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							placeholder="Email Adresiniz"
						/>
					</div>
					<div className="form-group relative">
						<input
							className="input"
							type="number"
							id="number"
							min={1}
							name="number"
							value={formik.values.number}
							onChange={formik.handleChange}
							placeholder="Kişi Sayısı"
						/>
					</div>
					<div className="form-group relative">
						<input
							className="input"
							type="datetime-local"
							id="date"
							name="date"
							value={formik.values.date}
							onChange={formik.handleChange}
							placeholder="Tarih"
						/>
					</div>
					<button className="btn btn-secondary--rounded" type="submit">
						Rezervasyon Yap
					</button>
				</form>
			</div>
			<div className="book-table__map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28745.859286044975!2d-73.97504476076932!3d40.7722234677071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2str!4v1675690131069!5m2!1sen!2str"
					width="600"
					height="450"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	);
};
export default BookTable;
