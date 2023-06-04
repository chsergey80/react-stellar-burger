import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-item.module.css"
import { ingredientPropType } from "../../utils/prop-types";
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

const IngredientItems = ({item, current}) => {
  
  const ingredients = useSelector(store => store.ingredients.ingredients).reduce((summ, element) => {
    if (element._id === item._id) {summ++} return summ;
  }, 0)

  const bun = useSelector(store => store.ingredients.bun)
  const bunCount = (bun) => {
    let num = 0;
    if (bun !== null){
      if(bun._id === item._id)
      return num = 2}
    return num;
  }
  const [, dragRef] = useDrag({
    type: 'ingredients',
    item: item}); 

  return (
    <li ref={dragRef} className={styles.main} onClick={() => current(item)}>
      {item.type === "bun" ? <Counter count={bunCount(bun)} size="default" extraClass="m-1" />
      : <Counter count={ingredients} size="default" extraClass="m-1" />}
      <img src={item.image} alt={`Изображение ${item.name}`} />
      <div className={`pb-2 pt-2 ${styles.priceItem}`}>
        <p className="text text_type_digits-default pr-2">{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default ${styles.text}`}>{item.name}</p>
    </li>
  )
}

IngredientItems.propTypes = {item: ingredientPropType.isRequired};

export default IngredientItems;