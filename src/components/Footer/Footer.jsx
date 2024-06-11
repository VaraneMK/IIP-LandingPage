import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Mail } from './../../svg/mail.svg';
import { ReactComponent as Phone } from './../../svg/phone.svg';
import { ReactComponent as Dots } from './../../svg/dots.svg';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer
			id="footer"
			className={styles.footer}>
			<div className="container">
				<Dots className={styles.footer__dots} />
				<div className={styles.footer__content}>
					{' '}
					<div className={styles.footer__contacts}>
						<div className={styles.footer__logo}>ИПИ</div>
						<div className={styles.footer__contacts_block}>
							<Mail />
							<a
								className={styles.footer__contacts_link}
								href="mailto:hello@iip.su">
								hello@iip.su
							</a>
						</div>
						<div className={styles.footer__contacts_block}>
							<Phone />
							<a
								className={styles.footer__contacts_link}
								href="tel:8(999)999-99-99">
								8 (999) 999-99-99
							</a>
						</div>
					</div>
					<div className={styles.footer__block}>
						<div className={styles.footer__block_title}>Направления</div>
						<Link
							to="/service/1"
							onClick={() => {
								window.scrollTo(0, 0);
							}}
							className="footer__link">
							Разработка программного
							<br />
							обеспечения
						</Link>
						<Link
							to="/service/2"
							onClick={() => {
								window.scrollTo(0, 0);
							}}
							className="footer__link">
							Построение аналитических
							<br />
							систем
						</Link>
						<Link
							to="/service/3"
							onClick={() => {
								window.scrollTo(0, 0);
							}}
							className="footer__link">
							Создание хранилищ данных
						</Link>
						<Link
							to="/service/4"
							onClick={() => {
								window.scrollTo(0, 0);
							}}
							className="footer__link">
							Системная интеграция
						</Link>
					</div>
					<div className={styles.footer__block}>
						<div className={styles.footer__block_title}>Продукты</div>
						<Link
							to="/"
							className="footer__link">
							Распознание речи
						</Link>
					</div>
				</div>
				<div className={styles.copyright}>©️ OOO “Институт проблем информатизации”</div>
			</div>
		</footer>
	);
}

export default Footer;
