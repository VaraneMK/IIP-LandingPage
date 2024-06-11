import React, { useEffect, useRef } from 'react';
import styles from './Header.module.css';
import { ReactComponent as Logo } from './../../svg/logo.svg';
import { Link, NavLink } from 'react-router-dom';

function Header() {
	const ref = useRef();
	const scrollHandler = (e) => {
		const scrollTop = e.target.documentElement.scrollTop;
		const innerHeight = window.innerHeight;

		if (scrollTop >= innerHeight) {
			ref.current.classList.add('header__bg');
		} else if (scrollTop < innerHeight) {
			ref.current.classList.remove('header__bg');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);

		return () => window.removeEventListener('scroll', scrollHandler);
	}, []);

	return (
		<header
			ref={ref}
			className={styles.header}>
			<Link to="/">
				<Logo className={styles.logo} />
			</Link>

			<div className={styles.center__links}>
				<NavLink
					onClick={(e) => {
						e.preventDefault();
						const element = document.getElementById('services');
						const y = element.offsetTop + element.offsetHeight;
						window.scrollTo({
							top: y,
							left: 0,
							behavior: 'smooth',
						});
					}}
					to="/"
					className={styles.links}>
					Направления
				</NavLink>
				<NavLink
					onClick={(e) => {
						e.preventDefault();
						const element = document.getElementById('products');
						const y = element.offsetTop;
						window.scrollTo({
							top: y,
							left: 0,
							behavior: 'smooth',
						});
					}}
					to="/"
					className={styles.links}>
					Продукты
				</NavLink>
			</div>
			<NavLink
				onClick={(e) => {
					e.preventDefault();
					const element = document.getElementById('footer');
					const y = element.offsetTop + element.offsetHeight;
					window.scrollTo({
						top: y,
						left: 0,
						behavior: 'smooth',
					});
				}}
				to="/"
				className={styles.links}>
				Контакты
			</NavLink>
		</header>
	);
}

export default Header;
