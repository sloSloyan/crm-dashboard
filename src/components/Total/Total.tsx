import React from 'react';
import totalIcon from './icons/total.png'
import membersIcon from './icons/members.png'
import activeIcon from './icons/active.png'
import avatar1 from './icons/avatar1.png'
import avatar2 from './icons/avatar2.png'
import avatar3 from './icons/avatar3.png'
import styles from './Total.module.scss';


const Total: React.FC = () => {



  return (
    <div className={styles.block}>
      <div className={styles.total}>
            <div className={styles.totalImg}>
                <img src={totalIcon} alt="" />
            </div>
            <div className={styles.totalContent}>
                <div className={styles.title}>
                    Total Customers
                </div>
                <div className={styles.number}>
                    5,423
                </div>
                <div className={styles.info}>
                    <span>16%</span> this month
                </div>
            </div>
      </div>
       <div className={styles.members}>
            <div className={styles.membersImg}>
                <img src={membersIcon} alt="" />
            </div>
            <div className={styles.membersContent}>
                <div className={styles.title}>
                    Members
                </div>
                <div className={styles.number}>
                    1,893
                </div>
                <div className={styles.info}>
                    <span>1%</span> this month
                </div>
            </div>
      </div>
       <div className={styles.active}>
            <div className={styles.activeImg}>
                <img src={activeIcon} alt="" />
            </div>
            <div className={styles.activeContent}>
                <div className={styles.title}>
                    Active Now
                </div>
                <div className={styles.number}>
                    189
                </div>
                <div className={styles.activeInfo}>
                   <div>
                    <img src={avatar1} alt="" />
                   </div>
                    <div>
                    <img src={avatar2} alt="" />
                   </div>
                    <div>
                    <img src={avatar3} alt="" />
                   </div>
                </div>
            </div>
      </div>
       
    </div>
  );
};

export default Total;