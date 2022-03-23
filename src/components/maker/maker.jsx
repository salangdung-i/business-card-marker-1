import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from '../maker/maker.module.css';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    '1': {
      id: '1',
      name: 'eunji',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'eunji@naver.com',
      message: 'go for it',
      fileName: 'eunji',
      fileURL: '',
    },
    '2': {
      id: '2',
      name: 'eunji2',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'eunji@naver.com',
      message: 'go for it',
      fileName: 'eunji',
      fileURL: 'eunji.png',
    },
    '3': {
      id: '3',
      name: 'eunji3',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'eunji@naver.com',
      message: 'go for it',
      fileName: 'eunji',
      fileURL: 'eunji.png',
    },
  });

  const onLogout = () => {
    authService.logout();
  };

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  }
  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        goToHome();
      }
    });
  });

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}

export default Maker;