// import { Link } from 'react-router-dom';

import styles from '../styles/author.module.scss';

const Author = ({ articles }) => {
  return (
    <div className={styles.author}>
      <h3 className={styles.h3}>About the Author</h3>
      <p>
        I'm passionate about preserving the old ways of growing, baking,
        pickling, cooking. This blog is where I share the wisdom that benefits
        us all.
      </p>
    </div>
  );
};

export default Author;
