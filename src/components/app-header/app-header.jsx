import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./app-header.module.css";

function AppHeader() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logo}>
        <Logo />
      </div>
      <nav className="pb-4 pt-4">
        <ul className={`${headerStyles.items} pb-4 pt-4`}>

          <li className={`${headerStyles.item} pl-5 pr-5`}>
            <a href="#burger-constructor" className={headerStyles.link}>
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default  pl-2">Конструктор</p>
            </a>
          </li>

          <li className={`${headerStyles.item} pl-5`}>
            <a href="#order-feed" className={headerStyles.link}>
              <ListIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive pl-2">
                Лента заказов
              </p>
            </a>
          </li>

          <li className={`${headerStyles.item} pl-5`}>
            <a href="#private-office" className={headerStyles.link}>
              <ProfileIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive pl-2 pr-5">
                Личный кабинет
              </p>
            </a>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;