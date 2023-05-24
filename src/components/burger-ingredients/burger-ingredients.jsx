import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";
import IngredientItems from "../ingredient-items/ingredient-items";
import styles from "./burger-ingredients.module.css"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { IngredientsContext } from "../../services/itemContext";

function BurgerIngredients() {
  const ingredients = useContext( IngredientsContext);
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const onOpen = (item) => {setCurrentIngredient(item)};
  const onClose = () => {setCurrentIngredient(null)};
  const [current, setCurrent] = useState("burgerBuns");
  const burgerBuns = ingredients.filter((ingredient) => ingredient.type === 'bun');
  const burgerSauces = ingredients.filter((ingredient) => ingredient.type === 'sauce');
  const burgerMains = ingredients.filter((ingredient) => ingredient.type === 'main');
  const getIngredients = (data) => (data.map(item => (<IngredientItems key={item._id} ingredients={item} current={onOpen} onClose={onClose}/>)));

  const tabScroll = (selectTab) => {
    setCurrent(selectTab);
    const item = document.getElementById(selectTab);
    if (item) {return item.scrollIntoView({ behavior: "smooth" })}};

  return (
    <div className={styles.main}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={styles.tab}>
        <Tab value="burgerBuns" active={current === "burgerBuns"} onClick={tabScroll}>Булки</Tab>
        <Tab value="burgerSauces" active={current === "burgerSauces"} onClick={tabScroll}>Соусы</Tab>
        <Tab value="burgerMains" active={current === "burgerMains"} onClick={tabScroll}>Начинки</Tab>
      </div>
      <div className={`custom-scroll ${styles.ingredients_box}`}>
        <h2 id="burgerBuns" className="text text_type_main-medium pt-5 pb-5">Булки</h2>
        <ul className={`${styles.ingredients_list} pt-5 pb-5`}> {getIngredients(burgerBuns)}
        </ul>
        <h2 id="burgerSauces" className="text text_type_main-medium pt-5 pb-5">Соусы</h2>
        <ul className={`${styles.ingredients_list} pt-1 pb-5`}> {getIngredients(burgerSauces)}
        </ul>
        <h2  id="burgerMains" className="text text_type_main-medium pt-5 pb-5">Начинки</h2>
        <ul className={`${styles.ingredients_list} pt-5 pb-5`}> {getIngredients(burgerMains)}
        </ul>
      </div>
      {currentIngredient && (<Modal onClose={onClose} title="Детали ингредиента">
        <IngredientDetails info={currentIngredient} onClose={onClose}/>
      </Modal>)} 
    </div>)}

BurgerIngredients.propTypes = {ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired};

export default BurgerIngredients;