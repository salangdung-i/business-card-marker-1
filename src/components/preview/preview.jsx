import React from 'react';
import Card from '../card/card';
import styles from '../preview/preview.module.css';

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      {
        cards.map(card => (<Card card={card} />))
      }
    </section>
  );
}
export default Preview;