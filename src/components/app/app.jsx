import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constuctor/burger-constructor';
import React from 'react';
import {getIngredients} from '../../utils/burger-api';

function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const getBurgrInfo = async () => {
      try{
        const burgerInfo = await getIngredients();
        setIngredients(burgerInfo.data)}
      catch (error) {
        setIsError(true)
        console.log('Ошибка загрузки данных', error)}
    }
    getBurgrInfo();
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      {isError ? <h2 className={styles.error}>Ошибка загрузки данных с сервера</h2> :
        <main className={styles.main}>
          { ingredients.length && <BurgerIngredients  />}
          { ingredients.length && <BurgerConstructor  />}
        </main>
      }
    </div>
  );
}

export default App;