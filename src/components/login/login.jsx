import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from '../login/login.module.css';

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate("/maker", { state: { id: userId } });
  };

  const onLogin = event => {
    authService
      .login(event.currentTarget.textContent)
      .then(data => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.
      onAuthChange(user => {
        user && goToMaker(user.uid);
      });
  });

  return (
    <div className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}
export default Login;