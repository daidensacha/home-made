import React from 'react';
import { useState } from 'react';
import styles from '../styles/contact.module.scss';
import AnimatedPage from './AnimatedPage';
import Modal from './Modal';
import cx from 'classnames';

// Import the NavLink component.
const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [inputValues, setInputValues] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    e.persist();
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  // Handle form submission.
  const handleSubmit = e => {
    console.log('handleSubmit ran');
    e.preventDefault();
    // On form sumission toggle modalOpen state to true to open modal.
    setModalOpen(!modalOpen);
  };

  function openModal() {
    // On closing modal toggle modalOpen state to false
    setModalOpen(!modalOpen);
    // On closing modal reset inputValues to empty strings
    setInputValues({ fullname: '', email: '', subject: '', message: '' });
  }

  return (
    <AnimatedPage>
      <div className={styles.main}>
        <div className={styles.container}>
          <Modal
            modalOpen={modalOpen}
            action={openModal}
            inputValues={inputValues}
          />
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h1 className={styles.h1}>Contact</h1>

          <div className={styles.formGroup}>
            <input
              type='text'
              name='fullname'
              onChange={e => handleChange(e)}
              value={inputValues.fullname}
              className={styles.formControl}
              id='fullname'
              placeholder='Enter your full name'
              minLength='3'
              max='10'
              pattern='[a-zA-Z0-9 ]+'
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
              pattern='(\w\.?)+@[\w\.-]+\.\w{2,}'
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
              minLength='5'
              max='15'
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
