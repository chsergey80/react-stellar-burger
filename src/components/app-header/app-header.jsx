import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={headerStyles.header}>
      <ul className={headerStyles.list}>
        <li className={`${headerStyles.item} pl-5 pr-5`}>
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default m-1">Конструктор</p>
        </li>
        <li className={`${headerStyles.item} pl-5 pr-5`}>
              <ListIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive m-1">Лента заказов</p>
        </li>
        <li className={`${headerStyles.logo} pt-1`}>
          <Logo />
        </li>
        <li className={`${headerStyles.item} pl-5 pr-5`}>
              <ProfileIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
          </li>
        </ul>
    </header >
  )
}

export default AppHeader;