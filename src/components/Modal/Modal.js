/*eslint-disable */
import React, { useEffect, useRef } from 'react';
//import { CSSTransition } from 'react-transition-group';
import ReactPortal from './ReactPortal';
import './modalStyles.css';

/**
 * Generic Modal
 * @param isOpen Is the modal open
 * @param handleClose action on closing the modal
 * @returns a modal
 */
function Modal({ children, isOpen, handleClose }) {
	const nodeRef = useRef(null);
	useEffect(() => {
		const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
		document.body.addEventListener('keydown', closeOnEscapeKey);
		return () => {
			document.body.removeEventListener('keydown', closeOnEscapeKey);
		};
	}, [handleClose]);

	return (
		<ReactPortal wrapperId='react-portal-modal-container'>
			<div className="modal" ref={nodeRef}>
				<button onClick={handleClose} className='close-btn'>
					Close
				</button>
				<div className='modal-content'>{children}</div>
			</div>
		</ReactPortal>
	);
}
export default Modal;
/*eslint-enable */