import React from 'react';
import {
	FaPhoneAlt,
	FaSearchLocation,
	FaEnvelope,
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaYoutube,
} from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Footer = () => {
	const [footer, setFooter] = useState({});

	const getFooter = async () => {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/footer`
		);
		if (response.data.success) {
			setFooter(response.data.data[0]);
		}
	};

	useEffect(() => {
		getFooter();
	}, []);

	return (
		<>
			<div className="footer">
				<div className="footer__contact">
					<h2>İletişim Bilgileri</h2>
					<a href={`tel:${footer.phone}`}>
						<FaPhoneAlt /> {footer.phone}
					</a>
					<a href={footer.address}>
						<FaSearchLocation /> İstanbul, Türkiye
					</a>
					<a href={`mailto:${footer.email}`}>
						<FaEnvelope /> {footer.email}
					</a>
				</div>
				<div className="footer__social">
					<h2>Spico</h2>
					<p>{footer.description}</p>
					<div className="footer__social--icons">
						{footer?.facebook && (
							<a href={footer.facebook}>
								<FaFacebook />
							</a>
						)}
						{footer?.instagram && (
							<a href={footer.instagram}>
								<FaInstagram />
							</a>
						)}
						{footer?.twitter && (
							<a href={footer.twitter}>
								<FaTwitter />
							</a>
						)}
						{footer?.youtube && (
							<a href={footer.youtube}>
								<FaYoutube />
							</a>
						)}
					</div>
				</div>
				<div className="footer__hours">
					<h2>Açılış Saatleri</h2>
					<p>{footer.openDays}</p>
					<p>{footer.openHours}</p>
				</div>
				<div className="w-full mt-10 mb-1">
					© All Right Reserved By Spicyo Restaurant Cafe
				</div>
			</div>
		</>
	);
};

export default Footer;
