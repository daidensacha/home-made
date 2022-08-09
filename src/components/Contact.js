import React from 'react';
import { useState } from 'react';
import styles from '../styles/contact.module.scss';
import AnimatedPage from './AnimatedPage';
import cx from 'classnames';

// Import the NavLink component.

const Contact = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  // Handle input change.
  const handleChange = e => {
    e.persist();
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  // Handle form submission.
  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputValues);
    const { name, email, subject, message } = inputValues;

    alert(
      !name || !email || !subject || !message
        ? `Missing field in your form.`
        : `Thank you ${name} for submitting your data!`,
    );
    e.target.name.value = '';
    e.target.email.value = '';
    e.target.subject.value = '';
    e.target.message.value = '';
    setInputValues({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <AnimatedPage>
      <div className={styles.main}>
        {/* <h1 className={styles.h1}>Contact</h1> */}
        <form className={styles.contactForm} onSubmit={e => handleSubmit(e)}>
          <h1 className={styles.h1}>Contact</h1>
          <div className={styles.formGroup}>
            <input
              type='text'
              name='name'
              onChange={e => handleChange(e)}
              value={inputValues.name}
              className={styles.formControl}
              id='name'
              placeholder='Enter your name'
              required
            />
            <input
              type='email'
              name='email'
              onChange={e => handleChange(e)}
              value={inputValues.email}
              className={styles.formControl}
              id='email'
              placeholder='Enter your email'
              required
            />
            <input
              type='text'
              name='subject'
              onChange={e => handleChange(e)}
              value={inputValues.subject}
              className={styles.formControl}
              id='subject'
              placeholder='Enter your subject'
              required
            />
            <textarea
              className={styles.formControl}
              name='message'
              id='message'
              onChange={e => handleChange(e)}
              value={inputValues.message}
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
