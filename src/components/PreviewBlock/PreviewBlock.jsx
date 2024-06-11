import React from 'react';
import styles from './PreviewBlock.module.css';

function PreviewBlock() {
	return (
		<section
			id="services"
			className={styles.preview__block}>
			<div className="container">
				<div className={styles.preview__content}>
					{' '}
					<div className={styles.preview__title}>
						Институт
						<br />
						проблем
						<br />
						информатизации
					</div>
					<div className={styles.preview__slogan}>
						Создаём решения для облегчения жизни
						<br />
						как отдельных людей, так и крупных предприятий
					</div>
					<div
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
						className={styles.preview__contact_btn}>
						Напишите нам
						<svg
							width="43"
							height="43"
							viewBox="0 0 43 43"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M38.8919 20.2332C39.5915 20.9329 39.5915 22.0673 38.8919 22.767L26.3502 35.3086C25.6505 36.0083 24.5161 36.0083 23.8164 35.3086C23.1167 34.609 23.1167 33.4745 23.8164 32.7748L33.2995 23.2917L5.37496 23.2917C4.38545 23.2917 3.58329 22.4896 3.58329 21.5001C3.58329 20.5106 4.38545 19.7084 5.37496 19.7084H33.2995L23.8164 10.2253C23.1167 9.52562 23.1167 8.3912 23.8164 7.69152C24.5161 6.99183 25.6505 6.99183 26.3502 7.69152L38.8919 20.2332Z"
								fill="#0269CC"
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PreviewBlock;
