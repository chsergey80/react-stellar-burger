import styles from "./burger-constructor.module.css"
import { DragIcon, CurrencyIcon, ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";
import React from "react";
import Modal from "../modal/modal";
import PopupOrder from '../order-details/order-details';
import { IngredientsContext, OrderContext } from "../../services/itemContext";
import { postOrder } from "../../utils/burger-api";

function BurgerConstructor() {
  const ingredients = React.useContext(IngredientsContext);
  const [popupOrder, setPopupOrder] = React.useState(false);
  const onOpen = () => {setPopupOrder(true); fetchPostOrderIngredients()};
  const onClose = () => {setPopupOrder(false)};
  const burgerBread = ingredients.find(item => item.type === 'bun');
  const ingredient = ingredients.filter(item => item.type !== 'bun');
  const totalPrice = React.useMemo(() => {
    const priceIngredients = ingredient.reduce((sum, item) => { return sum + item.price}, 0);
    return priceIngredients + burgerBread.price * 2;
  }, [burgerBread, ingredient]);

  const [order, setOrder] = React.useState("");
  const orderIngridients = React.useMemo(() => ingredients.map((i) => i._id), [ingredients]);
  function fetchPostOrderIngredients() {
    postOrder(orderIngridients)
      .then((response) => {setOrder(response.order.number.toString())})
      .catch((err) => {console.log(err)})
  }

  return (
  <>
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
  <OrderContext.Provider value={order}>
    {popupOrder && <Modal onClose={onClose}>
      <PopupOrder onClose={onClose}>
      </PopupOrder>
    </Modal>}
  </OrderContext.Provider>
  </>
  )}

BurgerConstructor.propTypes = {ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired}

export default BurgerConstructor;