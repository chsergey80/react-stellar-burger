import styles from "./burger-constructor.module.css"
import { DragIcon, CurrencyIcon, ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import Modal from "../modal/modal";
import OrderDetails from '../order-details/order-details';
import { getOrder } from '../../services/actions/api';
import { useSelector, useDispatch } from 'react-redux';

function BurgerConstructor() {
  const { data } = useSelector(store => store.data);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const orderIngridients = React.useMemo(() => data.map((i) => i._id), [data]);
  const onOpen = () => {setIsModalOpen(true); dispatch(getOrder(orderIngridients))};
  const onClose = () => {setIsModalOpen(false)};
  const burgerBread = data.find(item => item.type === 'bun');
  const ingredient = data.filter(item => item.type !== 'bun');
  const burgerBreadPrice = burgerBread && burgerBread.price;
  const totalPrice = React.useMemo(() => {return ingredient.reduce((sum, item) => { return sum + item.price}, burgerBreadPrice*2)}, [burgerBread, ingredient]);

  return (
  <>
  { data.length && 
  <div className={` ${styles.main} pt-5 pl-4 pr-4`}>
    <div className={` ${styles.bread} pb-5 pr-5`}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={`${burgerBread.name} (верх)`}
        price={burgerBread.price}
        thumbnail={burgerBread.image}/>
    </div>
    <div className={`custom-scroll ${styles.scrollbox}`}>
      <ul className={styles.list}>
        {ingredient.map((item) => (
          <li className={styles.items} key={item._id}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}/>
          </li>))}
      </ul>
    </div>
    <div className={` ${styles.bread} pb-5 pr-5 pt-5`}>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={`${burgerBread.name} (низ)`}
        price={burgerBread.price}
        thumbnail={burgerBread.image}/>
    </div>
    <div className={`pt-5 pr-8 ${styles.order}`}>
      <div className={styles.totalPrice}>
        <p className="text text_type_digits-medium pr-2">{totalPrice}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button onClick={onOpen} htmlType="button" type="primary" size="large">Оформить заказ</Button>
    </div>
  </div>
  }
    {isModalOpen && <Modal onClose={onClose}>
      <OrderDetails onClose={onClose} >
      </OrderDetails>
    </Modal>}
  </>
  )}

export default BurgerConstructor;