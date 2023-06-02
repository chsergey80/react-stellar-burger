import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("modals");

function Modal({ children, onClose }) {
  React.useEffect(() => {
    const closeByEsc = (evt) => {if (evt.key === "Escape") {onClose()}};
    document.addEventListener("keydown", closeByEsc);
      return () => {document.removeEventListener("keydown", closeByEsc)}
  }, [onClose])

  return ReactDOM.createPortal(
      (<>
        <ModalOverlay onClose={onClose}/>
        <div className={styles.main} onClick={onClose}>
          <button onClick={onClose} className={styles.close_button}>
            <CloseIcon type="primary" />
          </button>
          {children}
        </div>
      </>),
      modalRoot
  );
}

Modal.propTypes = {children: PropTypes.object.isRequired, onClose: PropTypes.func.isRequired};

export default Modal;