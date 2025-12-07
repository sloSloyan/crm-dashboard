import React from 'react';
import styles from './Header.module.scss';
import Input from '../Input/Input';

const Header: React.FC = () => {



  return (
    <div className={styles.block}>
        <div className={styles.text}>
             Hello Evano 👋🏼,
        </div>
          <div className={styles.search}>
      <div className={styles.searchIcon}>
      </div>
      <Input
        type="text" 
        className={styles.searchInput}
        placeholder="Search..."
        search
      />
    </div>
       
    </div>
  );
};

export default Header;