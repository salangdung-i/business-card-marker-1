import React, { memo } from 'react';
import styles from '../header/header.module.css';

const Header = memo(({ onLogout }) => {
  console.log('header');
  return (
    <header className={styles.header}>
      { onLogout &&
        <button className={styles.logout} onClick={onLogout}>Logout</button>
      }
      <img className={styles.img} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  )
});

export default Header;
