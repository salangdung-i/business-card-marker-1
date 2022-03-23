import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from '../maker/maker.module.css';

const Maker = ({ authService }) => {
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

      </div>
      <Footer />
    </section>
  );
}

export default Maker;