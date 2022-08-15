import CloseButton from './CloseButton';
import styles from '../styles/authorModal.module.scss';

const AuthorModal = ({ modalOpen, action, authors, authorName }) => {
  // const { fullname, email, subject } = inputValues;
  // console.log(
  //   'Modal',
  //   author.authorName,
  //   author.authorBio,
  //   author.authorImageUrl,
  //   author.authorImageTitle,
  // );

  return (
    <div className={`${styles.modalContainer} ${modalOpen ? styles.active : ''}`}>
      <div className={styles.modal}>
        <div className={styles.box}>
          <h3>{authorName}</h3>

        </div>

        <CloseButton action={action} />
      </div>
    </div>
  );
};

export default AuthorModal;
