import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/footer.module.scss';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';


const Footer = () => {
  // Get the history object
  const history = useNavigate();
  // const navigate = useNavigate();

  const goBack = () => {
    // imperatively redirect back
    history(-1);
  };

  const goForward = () => {
    // imperatively redirect forward
    history(+1);
  };

  return (
    <footer className={styles.footer}>
      <button className={styles.button} onClick={goBack}><FaAngleLeft /> Back</button>
      <button className={styles.button} onClick={goForward}>Forward <FaAngleRight /></button>
    </footer>
  );
};

export default Footer;
