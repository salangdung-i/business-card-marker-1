import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from '../maker/maker.module.css';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {

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
    {

      id: '3',
      name: 'eunji3',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'eunji@naver.com',
      message: 'go for it',
      fileName: 'eunji',
      fileURL: 'eunji.png',
    }
  ]);

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
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}

export default Maker;