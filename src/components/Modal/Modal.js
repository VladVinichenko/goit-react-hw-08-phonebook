import s from './Modal.module.css'
import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onCloseModal, type, children, action }) {
  const history = useHistory()
  const isLogged = useSelector(store => store.userReducer.isLogged)
  const handleUserKeyPress = useCallback(event => {
    event.code === 'Escape' && functionCloseModal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    document.body.style.overflow = "hidden"
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      functionCloseModal()
    }
  };


  useEffect(() => {
    if (isLogged && type === 'sign') { functionCloseModal() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged])

  const closeModal = (evt) => {
    functionCloseModal()
  }

  const functionCloseModal = () => {
    document.body.removeAttribute('style')
    type === "sign" ? history.goBack() : onCloseModal(null, null)
  }


  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal} >
        <button
          type="button"
          className={s.Button}
          onClick={closeModal}>Close</button>
        {children}

      </div>
    </div>,
    modalRoot,
  );
}
