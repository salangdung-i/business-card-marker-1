import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from '../editor/editor.module.css';

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {
        cards && cards.map(card => <CardEditForm card={card} />)
      }
      <CardAddForm />
    </section>
  );
}

export default Editor;