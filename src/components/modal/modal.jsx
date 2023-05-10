import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("react-modals");

function Modal({ children, onClose }) {
  React.useEffect(() => {
    document.addEventListener("keydown", (evt) => {if (evt.key === "Escape") {onClose()}})
      return () => {document.removeEventListener("keydown", (evt) => {if (evt.key === "Escape") {onClose()}})}
  }, [])

  return ReactDOM.createPortal(
      (<>
        <ModalOverlay onClose={onClose}/>
        <div className={styles.main} onClick={onClose}>
          {children}
        </div>
      </>),
      modalRoot
  );
}

Modal.propTypes = {children: PropTypes.object.isRequired, onClose: PropTypes.func.isRequired};

export default Modal;