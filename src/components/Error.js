import { Link } from 'react-router-dom';

import AnimatedPage from './AnimatedPage';

import styles from '../styles/Error.module.scss';

const Error = () => {
  return (
    <AnimatedPage>
      <div className={styles.main}>
        <div className={styles.errorSection}>
          <h1 className={styles.h1}>404</h1>
          <p>Page not found</p>
          <Link className={styles.btn} to='/'>Back to the homepage</Link>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Error;
