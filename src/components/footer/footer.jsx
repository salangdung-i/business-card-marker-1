import React, { memo } from 'react';
import styles from '../footer/footer.module.css';

const Footer = memo(() => {
  return (
    <div className={styles.footer}>
      <p className={styles.title}>Business card maker!</p>
    </div>
  );
}
);
export default Footer;