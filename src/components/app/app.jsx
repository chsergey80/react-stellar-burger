import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constuctor/burger-constructor';
import {useState, useEffect} from 'react';
import {getIngredients} from '../../utils/burger-api';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getBurgrInfo = async () => {
      try{const burgerInfo = await getIngredients();
        setIngredients(burgerInfo.data)}
      catch (error) {setIsError(true)
        console.log('Ошибка загрузки данных', error)}}
    getBurgrInfo();
  }, []);

  return (
    <div className={styles.app}>
      <DndProvider backend={HTML5Backend}>
        <AppHeader />
        {isError ? <h2 className={styles.error}>Ошибка загрузки данных с сервера</h2> :
          <main className={styles.main}>
            { ingredients.length && <BurgerIngredients  />}
            { ingredients.length && <BurgerConstructor  />}
          </main>
        }
      </DndProvider>
    </div>
  );
}

export default App;