import { useState } from "react";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";
import IngredientItems from "../ingredient-items/ingredient-items";
import styles from "./burger-ingredients.module.css"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredients({ingredients}) {
  const [current, setCurrent] = useState("bun");
  const burgerBuns = ingredients.filter((ingredient) => ingredient.type === 'bun');
  const burgerSauces = ingredients.filter((ingredient) => ingredient.type === 'sauce');
  const burgerMainIngredients = ingredients.filter((ingredient) => ingredient.type === 'main');
  const getIngredients = (data) => (data.map(item => (<IngredientItems key={item._id} ingredients={item} />)));

  return (
    <div className={styles.main}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={styles.tab}>
        <Tab value="buns" active={current === "buns"} onClick={setCurrent}>Булки</Tab>
        <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>Соусы</Tab>
        <Tab value="mains" active={current === "mains"} onClick={setCurrent}>Начинки</Tab>
      </div>
      <div className={`custom-scroll ${styles.ingredients_box}`}>
        <h2 className="text text_type_main-medium pt-5 pb-5">Булки</h2>
        <ul className={`${styles.ingredients_list} pt-5 pb-5`}>
          {getIngredients(burgerBuns)}
        </ul>
        <h2 className="text text_type_main-medium pt-5 pb-5">Соусы</h2>
        <ul className={`${styles.ingredients_list} pt-1 pb-5`}>
          {getIngredients(burgerSauces)}
        </ul>
        <h2 className="text text_type_main-medium pt-5 pb-5">Начинки</h2>
        <ul className={`${styles.ingredients_list} pt-5 pb-5`}>
          {getIngredients(burgerMainIngredients)}
        </ul>
      </div>
    </div>)}

BurgerIngredients.propTypes = {ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired};

export default BurgerIngredients;