import CloseButton from './CloseButton';
import styles from '../styles/modal.module.scss';

const Modal = ({ modalOpen, action, inputValues }) => {
  // const { fullname, email, subject } = inputValues;
  console.log(
    'Modal',
    inputValues.fullname,
    inputValues.email,
    inputValues.subject,
  );

  return (
    <div className={`${styles.container} ${modalOpen ? styles.active : ''}`}>
      <div className={styles.modal}>
        <div className={styles.box}>
          <h3>Message submitted successsfully</h3>
          <p>
            Thank you{' '}
            {inputValues.fullname
              ? inputValues.fullname
              : 'for your submission'}
            .
          </p>
          <p>
            Your message {inputValues.subject ? inputValues.subject : ''} has
            bene received.
          </p>
          <p>
            We will reply to {inputValues.subject ? inputValues.email : 'you'}{' '}
            as soon as possible.
          </p>
        </div>

        <CloseButton action={action} />
      </div>
    </div>
  );
};

export default Modal;
