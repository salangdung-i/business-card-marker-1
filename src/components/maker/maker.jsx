import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from '../maker/maker.module.css';
import Preview from '../preview/preview';

const Maker = ({ authService, FileInput, cardRepository }) => {
  const location = useLocation().state;
  const [userId, setUserId] = useState(location && location.id);
  const [cards, setCards] = useState({});

  const onLogout = () => {
    authService.logout();
  };

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  }

  // DB관련
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    })
    return () => {
      stopSync();
    }
  }, [userId]);

  // 로그인 관련
  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
      } else {
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
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.saveCard(userId, card);
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}

export default Maker;