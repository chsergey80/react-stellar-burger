import styles from "./order-details.module.css"
import checkIcon from "../../images/graphics.svg"
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import React from "react";
import { OrderContext } from "../../services/itemContext";

const OrderDetails = ({onClose}) =>{
  const order = React.useContext(OrderContext);

  return (
    <div>
      <ul className={styles.main}  onClick={e => e.stopPropagation()}>
        <div className={styles.closeIcon}>
        <CloseIcon type="primary" onClick={onClose}/>
        </div>
        <li className={styles.about}>
        <p className={`${styles.digits} text text_type_digits-large`}>{order}</p>
        </li>
        <li className={styles.order}>
        <p className="text text_type_main-medium">идентификатор заказа</p>
        </li>
        <li className={styles.about}>
        <img src={checkIcon} alt='Иконка с галочкой'></img>
        </li>
        <li className={styles.text}>
        <p className="text text_type_main-default">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive pt-2">Дождитесь готовности на орбитальной станции</p>
        </li>
      </ul>
    </div>
  );
}
  
  OrderDetails.propTypes = {onClose: PropTypes.func.isRequired};
  
  export default OrderDetails;