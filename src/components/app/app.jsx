import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constuctor/burger-constructor';
import React from 'react';
import {getIngredients} from '../../utils/burger-api';
import { IngredientsContext } from "../../services/itemContext";

function App() {
  const [stateInfo, setStateInfo] = React.useState([]);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const getBurgrInfo = async () => {
      try{
        const burgerInfo = await getIngredients();
        setStateInfo(burgerInfo.data)}
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
        { stateInfo.length &&
          <IngredientsContext.Provider value={stateInfo}>
            <BurgerIngredients ingredients={stateInfo} />
            <BurgerConstructor ingredients={stateInfo} />
          </IngredientsContext.Provider>}
        </main>
      }
    </div>
  );
}

export default App;