import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-items.module.css"
import { ingredientPropType } from "../../utils/prop-types";

const IngredientItems = ({ingredients, current}) => {
  return (
    <li className={styles.main} onClick={() => current(ingredients)}>
      <Counter count={1} size="default" className={styles.counter} extraClass="m-1" />
      <img src={ingredients.image} alt={`Изображение ${ingredients.name}`} />
      <div className={`pb-2 pt-2 ${styles.priceItem}`}>
        <p className="text text_type_digits-default pr-2">{ingredients.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default ${styles.text}`}>{ingredients.name}</p>
    </li>
  )
}

IngredientItems.propTypes = {ingredients: ingredientPropType.isRequired};

export default IngredientItems;