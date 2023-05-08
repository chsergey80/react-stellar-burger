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
        if (res.status === 200) {
          const burgerInfo = await res.json();
          setStateInfo(burgerInfo.data);
        } else {throw new Error('Error fetching users list')}
      } catch (error) {setIsError(true)}
    }
    getBurgrInfo();
  }, []);

  return (
    <div className={styles.app}>
      {isError ? <h3> Error! Please try again later</h3> :
      <>
        <AppHeader />
        <main className={styles.main}>
        { stateInfo.length && <BurgerIngredients ingredients={stateInfo} />}
        { stateInfo.length && <BurgerConstructor ingredients={stateInfo} />}
        </main>
        </>
        }
    </div>
  );
}

export default App;