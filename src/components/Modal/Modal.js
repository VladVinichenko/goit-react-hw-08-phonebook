import s from './Modal.module.css'
import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onCloseModal, type, children, action }) {
  const history = useHistory()
  const error = useSelector(store => store.userReducer.error)
  const isLogged = useSelector(store => store.userReducer.isLogged)
  const handleUserKeyPress = useCallback(event => {
    event.code === 'Escape' && functionCloseModal()
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
    console.dir(e);
    if (e.currentTarget === e.target) {
      functionCloseModal()
    }
  };


  useEffect(() => {
    if (isLogged && type === 'sign') { functionCloseModal() }
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
