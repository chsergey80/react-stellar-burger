//import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from "react-dom";
import modalStyles from "./modal.module.css";
import { useEffect } from "react";

const modalRoot = document.querySelector('#react-modals');   // нужно внести эту запись в файл public/index.html, 32 строчка

function Modal({ children, onClose }) {  // в качестве children будет модуль ingredient-details
  useEffect(() => {   // работаем со слушателями закрытия модального окна
    function closeOnEsc(evt) {if (evt.key === 'Escape') {onClose()}}
    document.addEventListener('keydown', closeOnEsc);
    return () => {document.removeEventListener('keydown', closeOnEsc)}
  })
  return ReactDOM.createPortal(     // Создаем портал, позволяющий отрендерить дочерние элементы в узле DOM(модальном окне), существующий вне иерархии DOM-компонента
      <>
        <ModalOverlay onClose={onClose} />
        <div className={modalStyles.main}>
          <button onClick={onClose} className={modalStyles.close_button}>
            <CloseIcon />
          </button>
          {children}
        </div>
      </>,
      modalRoot
  );
};

export default Modal