import { useState, useEffect } from "react";
import IngredientItems from "../ingredient-item/ingredient-item";
import styles from "./burger-ingredients.module.css"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useSelector, useDispatch } from 'react-redux';
import { getBurgerData } from '../../services/actions/actions';
import {ITEM_OPEN, ITEM_CLOSE, MODAL_OPEN, MODAL_CLOSE} from '../../services/actions/actions';
import { useInView } from "react-intersection-observer";

function BurgerIngredients() {
  const {data} = useSelector(store => store.data);
  const open = useSelector(store => store.open.isOpen);
  const dispatch = useDispatch();
  useEffect(()=> {dispatch(getBurgerData())}, [])
  const onOpen =(item) => {
    dispatch({type: ITEM_OPEN, ingredient: item});
    dispatch({type: MODAL_OPEN});
  }
  const onClose = () => {
    dispatch({type: MODAL_CLOSE });
    dispatch({type: ITEM_CLOSE});
  }
  const burgerBuns = data.filter((ingredient) => ingredient.type === 'bun');
  const burgerSauces = data.filter((ingredient) => ingredient.type === 'sauce');
  const burgerMains = data.filter((ingredient) => ingredient.type === 'main');
  const getIngredients = (data) => (data.map(item => (<IngredientItems key={item._id} item={item} current={onOpen} onClose={onClose}/>)));
  const [burgerBun, burgerBunEntry] = useInView({ threshold: 1, root: document.querySelector('#viewport') });
  const [burgerSauce, burgerSauceEntry] = useInView({ threshold: 0.90, root: document.querySelector('#viewport')});
  const [burgerMain, burgerMainEntry] = useInView({ threshold: 0.2, root: document.querySelector('#viewport')});
  const [current, setCurrent] = useState();
  const tabScroll = (selectTab) => {
    setCurrent(selectTab);
    const item = document.getElementById(selectTab);
    if (item) {return item.scrollIntoView({ behavior: "smooth" })}};

  return (
    <div className={styles.main}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={styles.tab}>
        <Tab value='burgerBuns' active={burgerBunEntry === true || current === "burgerBuns" } onClick={tabScroll}>Булки</Tab>
        <Tab value='burgerSauces' active={burgerSauceEntry === true || current === "burgerSauces" }  onClick={tabScroll}>Соусы</Tab>
        <Tab value='burgerMains' active={burgerMainEntry === true || current === "burgerMains" }  onClick={tabScroll}>Начинки</Tab>
      </div>
      <div id="viewport" className={`custom-scroll ${styles.ingredients_box}`}>
        <h2 id="burgerBuns" className="text text_type_main-medium pt-5 pb-5">Булки</h2>
        <ul  ref={burgerBun} className={`${styles.ingredients_list} pt-5 pb-5`}> {getIngredients(burgerBuns)}
        </ul>
        <h2 id="burgerSauces" className="text text_type_main-medium pt-5 pb-5">Соусы</h2>
        <ul ref={burgerSauce} className={`${styles.ingredients_list} pt-1 pb-5`}> {getIngredients(burgerSauces)}
        </ul>
        <h2  id="burgerMains" className="text text_type_main-medium pt-5 pb-5">Начинки</h2>
        <ul ref={burgerMain} className={`${styles.ingredients_list} pt-5 pb-5`}> {getIngredients(burgerMains)}
        </ul>
      </div>
      {open && (<Modal onClose={onClose} title="Детали ингредиента">
        <IngredientDetails onClose={onClose}/>
      </Modal>)} 
    </div>)}

export default BurgerIngredients;