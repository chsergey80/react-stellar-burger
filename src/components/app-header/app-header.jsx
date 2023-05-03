import headerStyles from './app-header.module.css';
import {BurgerIcon,
        Logo,
        ProfileIcon,
        ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader(props) {
  return (
    <nav className={headerStyles.header}>
      <ul className={headerStyles.header_items}>
        <li className={headerStyles.header_item}>
          <div>
          <BurgerIcon type="primary"/>
          </div>
          <p className={headerStyles.text_item}>Конструктор</p>
        </li>
        <li className={headerStyles.header_item}>
          <div>
          <ListIcon type="secondary"/>
          </div>
          <p className={headerStyles.text_item}>Лента заказов</p>
        </li>
        <li className={headerStyles.logo_item}>
          <div className={headerStyles.logo}>
            <Logo />
          </div>
        </li>
        <li className={headerStyles.header_item}>
          <div>
            <ProfileIcon type="secondary" />
          </div>
          <p className={headerStyles.text_item}>Личный кабинет</p>
        </li>
      </ul>
    </nav>
  );
}

export default AppHeader;