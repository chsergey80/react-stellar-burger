import overlayStyles from "./modal-overlay.module.css"
//import PropTypes from "prop-types"

function ModalOverlay({ onClose }) {   // создаем фоновую подложку под модальным окном, пока без проверки на PropTypes
  return (
    <div onClick={onClose} className={overlayStyles.main}></div>
  )
}

export default ModalOverlay