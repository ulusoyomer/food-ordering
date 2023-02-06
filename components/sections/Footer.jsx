import Link from 'next/link';
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
import TitlePrimary from '../ui/TitlePrimary';

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="footer__contact">
					<h2>İletişim Bilgileri</h2>
					<Link href="tel:+05322222222">
						<FaPhoneAlt /> 0532 123 45 67
					</Link>
					<Link href="https://maps.google.com/maps?q=New+York">
						<FaSearchLocation /> İstanbul, Türkiye
					</Link>
					<Link href="mailto:someone@example.com">
						<FaEnvelope /> asdasf@asdasd.com
					</Link>
				</div>
				<div className="footer__social">
					<h2>Spico</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Quos, porro ullam nesciunt placeat ex.
					</p>
					<div className="footer__social--icons">
						<Link href="https://www.facebook.com/">
							<FaFacebook />
						</Link>
						<Link href="https://www.instagram.com/">
							<FaInstagram />
						</Link>
						<Link href="https://twitter.com/">
							<FaTwitter />
						</Link>
						<Link href="https://www.youtube.com/">
							<FaYoutube />
						</Link>
					</div>
				</div>
				<div className="footer__hours">
					<h2>Açılış Saatleri</h2>
					<p>Hafta içi: 09:00 - 18:00</p>
					<p>Hafta sonu: Kapalı</p>
				</div>
				<div className="w-full my-2">
					All Right Reserved By Spicyo Restaurant
				</div>
			</div>
		</>
	);
};

export default Footer;
