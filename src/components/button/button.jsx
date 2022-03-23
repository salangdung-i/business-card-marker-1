import React from 'react';
import styles from '../button/button.module.css';

const Button = ({ name, onSubmit }) => {
  return (
    <button className={styles.button} onClick={onSubmit}>{name}</button>
  );
}

export default Button;
