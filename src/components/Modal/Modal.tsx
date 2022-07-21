//https://nainacodes.com/blog/create-an-accessible-and-reusable-react-modal

import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './modalStyles.scss';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const modal = (
    <React.Fragment>
      <div className='modal-backdrop' />
      <div className='modal-wrapper'>
        <div className='modal-body'>
          <div className='modal-header'>
            <div className='modal-headerText'>{headerText}</div>
            <div className='modal-closeButton' onClick={hide}>X</div>
          </div>
          <div className='modal-content'>{modalContent}</div>
        </div>
      </div>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};