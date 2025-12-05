import React from 'react';
import { MenuItem } from '../../types';
import styles from './Header.module.scss';
import searchIcon from './icon/search.png'
import arrowIcon from './icon/arrow.png'
import Input from '../Input/Input';

const Header: React.FC = () => {



  return (
    <div className={styles.block}>
        <div className={styles.text}>
             Hello Evano 👋🏼,
        </div>
          <div className={styles.search}>
      <div className={styles.searchIcon}>
        {/* <img src={searchIcon} alt="" /> */}
      </div>
      <Input
        type="text" 
        className={styles.searchInput}
        placeholder="Search..."
        search
      />
      {/* <input 
        type="text" 
        className={styles.searchInput}
        placeholder="Search..."
      /> */}
    </div>
       
    </div>
  );
};

export default Header;