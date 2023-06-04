import styles from "./burger-constructor.module.css"
import { DragIcon, CurrencyIcon, ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import Modal from "../modal/modal";
import OrderDetails from '../order-details/order-details';
import { getOrder } from '../../services/actions/api';
import { useSelector, useDispatch } from 'react-redux';
import {BUN_MOVE, SAUCE_FILLING_MOVE, ELEMENT_REMOVE, moveIngredientItem} from '../../services/actions/burger-ingredients';
import {useDrop} from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { Element } from '../element/element';

function BurgerConstructor() {
  const { data } = useSelector(store => store.data);
  const buns = useSelector(store => store.ingredients.bun);
  const ingredients = useSelector(store => store.ingredients.ingredients);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const orderIngridients = React.useMemo(() => data.map((a) => a._id), [data]);
  const onOpen = () => {setIsModalOpen(true); dispatch(getOrder(orderIngridients))};
  const onClose = () => {setIsModalOpen(false)};
  const totalPrice = React.useMemo(() => {return ingredients.reduce((sum, item) => { return sum + item.price}, buns ? (buns.price*2) : 0)}, [buns, ingredients]);
  const onDropHandler = (itemId) => {
    if(itemId.type === 'bun' ){ return dispatch({
      type: BUN_MOVE,
      bun: itemId})}
    if(itemId.type === 'sauce' || 'main' ){ return dispatch({
      type: SAUCE_FILLING_MOVE,
      ingredients: itemId,
      id: uuidv4()})}
    }
    const removeIngredient =(item)=> {
      return dispatch({
        type: ELEMENT_REMOVE,
        id: item.id
        
      })
    }

const [, dropTarget] = useDrop({
  accept: 'ingredients',
  drop(itemId) {
      onDropHandler(itemId);
  },
});

  //функция обновления состояния при сортировке
  const moveItemIngredient = useCallback(
    (dragIndex, hoverIndex) => {
      dispatch(moveIngredientItem(dragIndex, hoverIndex));
    },
    [dispatch]
  );



  return (
  <>
  <section ref={dropTarget} className={` ${styles.main} pt-5 pl-4 pr-4`}>

    <div className={` ${styles.bread} pb-5 pr-5`}>
      {buns &&
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${buns.name} (верх)`}
          price={buns.price}
          thumbnail={buns.image}/>
      }
    </div>

    <div className={`custom-scroll ${styles.scrollbox}`}>
      <ul className={styles.list}>
        {ingredients.map((item) => (
          <li className={styles.items} key={item._id}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}
              handleClose = {() => removeIngredient(item)}/>
              moveItemIngredient={moveItemIngredient}
          </li>))}
      </ul>
    </div>

    <div className={` ${styles.bread} pb-5 pr-5 pt-5`}>
      {buns&&
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${buns.name} (низ)`}
          price={buns.price}
          thumbnail={buns.image}/>
      }
    </div>

    <div className={`pt-5 pr-8 ${styles.order}`}>
      <div className={styles.totalPrice}>
        <p className="text text_type_digits-medium pr-2">{totalPrice}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button onClick={onOpen} htmlType="button" type="primary" size="large">Оформить заказ</Button>
    </div>

  </section>

    {isModalOpen && <Modal onClose={onClose}>
      <OrderDetails onClose={onClose} >
      </OrderDetails>
    </Modal>}
  </>
  )}

export default BurgerConstructor;