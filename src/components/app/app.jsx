import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constuctor/burger-constructor';
import React from 'react';

function App() {
  const urlInfoData = 'https://norma.nomoreparties.space/api/ingredients'; 
  const [stateInfo, setStateInfo] = React.useState([]);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const getBurgrInfo = async () => {
      try{
        const res = await fetch(urlInfoData);
        const burgerInfo = await res.json();
        setStateInfo(burgerInfo.data);
        }
      catch (error) {
        setIsError(true)
        console.log('Ошибка загрузки данных', error)
      }
    }
    getBurgrInfo();
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      {isError ? <h2 className={styles.error}>Ошибка загрузки данных с сервера</h2> :
        <main className={styles.main}>
        { stateInfo.length && <BurgerIngredients ingredients={stateInfo} />}
        { stateInfo.length && <BurgerConstructor ingredients={stateInfo} />}
        </main>
        }
    </div>
  );
}

export default App;