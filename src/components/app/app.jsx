import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constuctor/burger-constructor';

function App() {
  return (
    <div className={styles.app}>
      <pre style={{
        fontSize: "1.5rem"
      }}>
        <AppHeader/>
        <main className={styles.main}>
          <BurgerIngredients data={data} />
          <BurgerConstructor />
        </main>
      </pre>
    </div>
  );
}

export default App;