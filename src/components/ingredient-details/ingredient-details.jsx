import styles from './ingredient-details.module.css'
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";

const IngredientDetails = ({info}) =>{
  
  return (
    <div className={styles.main} onClick={e => e.stopPropagation()}>
      <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h2>
      <img src={info.image_large} alt="Изображение ингредиента"></img>
      <span className={`${styles.subtitle} text text_type_main-medium`}>{info.name}</span>
      <ul className={styles.food}>
        <li className={styles.item}>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{info.calories}</p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{info.proteins}</p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{info.fat}</p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{info.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {info: ingredientPropType.isRequired, onClose: PropTypes.func.isRequired};

export default IngredientDetails;