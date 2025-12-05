import React from 'react';
import styles from './Table.module.scss';

interface TableProps {
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        {children}
      </table>
    </div>
  );
};