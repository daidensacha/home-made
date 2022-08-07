import React from 'react';
import styles from '../styles/contact.module.scss';
import AnimatedPage from './AnimatedPage';
import cx from 'classnames';

// Import the NavLink component.

const Contact = () => {
  return (
    <AnimatedPage>
      <div className={styles.main}>
        {/* <h1 className={styles.h1}>Contact</h1> */}
        <form className={styles.contactForm}>
        <h1 className={styles.h1}>Contact</h1>
          <div className={styles.formGroup}>
            <input
              type='text'
              name='name'
              className={styles.formControl}
              id='name'
              placeholder='Enter your name'
              required
            />
            <input
              type='email'
              name='email'
              className={styles.formControl}
              id='email'
              placeholder='Enter your email'
              required
            />
            <input
              type='text'
              name='subject'
              className={styles.formControl}
              id='subject'
              placeholder='Enter your subject'
              required
            />
            <textarea
              className={styles.formControl}
              name='message'
              id='message'
              rows='3'
              placeholder='Enter your message'></textarea>
            <button
              className={cx(styles.button, styles.btnPrimary)}
              type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
