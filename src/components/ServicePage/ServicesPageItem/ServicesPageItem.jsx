import React from 'react';
import styles from './PageItem.module.css';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';

function ServicesPageItem({ title, color, modalContent }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	console.log(modalContent);
	return (
		<div
			className={styles.service__item}
			onClick={onOpen}>
			<span
				className={styles.service__box}
				style={{ backgroundColor: color }}></span>
			<div className={styles.service__name}>{title}</div>
			<Modal
				isOpen={isOpen}
				onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					maxWidth={'none'}
					width={'none'}
					className={styles.modal__content}>
					<ModalCloseButton />
					<h1 className={styles.modal__title}>{modalContent?.title}</h1>

					<ModalBody className={styles.modal__body}>
						<div className={styles.modal__text}>{modalContent?.p1}</div>
						<div
							className={styles.modal__img}
							style={{ backgroundImage: 'url(' + modalContent?.img + ')' }}></div>
						<div className={styles.modal__text}>{modalContent?.p2}</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
}

export default ServicesPageItem;
