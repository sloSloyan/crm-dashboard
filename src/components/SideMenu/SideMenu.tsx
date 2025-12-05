import React from 'react';
import { MenuItem } from '../../types';
import styles from './SideMenu.module.scss'; 
import avatarIcon from './icon/avatar.png'
import arrowIcon from './icon/arrow.png'

const SideMenu: React.FC = () => {

const [menuItems, setMenuItems] = React.useState<MenuItem[]>([
  { id: '1', label: 'Dashboard', isActive: true },
  { id: '2', label: 'Product' },
  { id: '3', label: 'Customers' },
  { id: '4', label: 'Income' },
  { id: '5', label: 'Promote' },
  { id: '6', label: 'Help' },
]);

  const handleItemClick = (clickedId: string) => {
  setMenuItems(prevItems => 
    prevItems.map(item => ({
      ...item,
      isActive: item.id === clickedId
    }))
  );
};

  return (
    <div className={styles.sideMenu}>
      {/* Логотип и профиль */}
      <div className={styles.sideMenuHeader}>
        <div className={styles.sideMenuLogo}>
          <div className={styles.sideMenuLogoIcon}>⚡</div>
          <h2>Dashboard</h2>
        </div>
        <div className={styles.sideMenuVersion}>v.01</div>
      </div>

      {/* Основное меню */}
      <nav className={styles.sideMenuNav}>
        <ul className={styles.sideMenuList}>
          {menuItems.map((item) => (
            <li 
              key={item.id} 
              onClick={() => handleItemClick(item.id)}
              className={`${styles.sideMenuItem} ${item.isActive ? styles.sideMenuItemActive : ''}`}
            >
                <div className={styles.menuItem}>
                       <div className={styles.sideMenuLink}>
                <span className={styles.sideMenuLabel}>{item.label}</span>
                 <span> 
                    <img src={arrowIcon} alt="" />
                 </span>
              </div>
             
                </div>
           
            </li>
          ))}
        </ul>
      </nav>

      {/* Профиль пользователя внизу */}
      <div className={styles.footer}>
          <div className={styles.upgrade}>
            <div className={styles.text}>
                 Upgrade to PRO to get access all Features!
            </div>
            <div className={styles.btn}>
                Get Pro Now!
            </div>
          </div>
      <div className={styles.sideMenuProfile}>
        <div className={styles.sideMenuAvatar}>
          <img src={avatarIcon} alt="" />
        </div>
        <div className={styles.sideMenuUserInfo}>
          <div className={styles.sideMenuUserName}>Evano</div>
          <div className={styles.sideMenuUserRole}>Project Manager</div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default SideMenu;