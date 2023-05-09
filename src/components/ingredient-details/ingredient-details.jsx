import { ingredientPropType } from "../../utils/prop-types";
import detailsStyles from './ingredient-details.module.css'

function IngredientDetails({ currentIngredient }) {   // наполнение всплывающего окна с выбранным ингредиентом бургера
  return (                            //Названия className взяты из React Developer Burger Ui Components раздел Text inactive color
    <div className={detailsStyles.main}>
      <h2 className={`${detailsStyles.title} text text_type_main-large pb-5`}>Детали ингредиента</h2>
      <img src={currentIngredient.image_large} alt="Изображение ингредиента"></img>
      <span className="text text_type_main-medium pt-4">{currentIngredient.name}</span>
      <ul className={detailsStyles.food}>
        <li className={detailsStyles.contentItem}>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{currentIngredient.calories}</p>
        </li>
        <li className={detailsStyles.contentItem}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{currentIngredient.proteins}</p>
        </li>
        <li className={detailsStyles.contentItem}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{currentIngredient.fat}</p>
        </li>
        <li className={detailsStyles.contentItem}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{currentIngredient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  )
}

IngredientDetails.propTypes = {currentIngredient: ingredientPropType.isRequired,};    // проверка сделана также как и в модуле ingredient-items

export default IngredientDetails