import styles from '../styles/authors.module.scss';

const Authors = ({ authors }) => {
  return (
    <div className={styles.authors}>
      <h3 className={styles.h3}>About the Authors</h3>
      {authors?.map(({ authorName, authorBio, id}) => (
        <>
        <h4 key={id} className={styles.h4}>{authorName}</h4>
        <p>{authorBio}</p>
        </>
      ))}
    </div>
  );
};

export default Authors;
