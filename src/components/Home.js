import React from 'react';

import AnimatedPage from './AnimatedPage';
import { Link } from 'react-router-dom';

import styles from '../styles/home.module.scss';
// Import the NavLink component.

const Home = ({ articles }) => {
  return (
    <AnimatedPage>
      <div className={styles.main}>
        <div className={styles.latestRecipes}>
          <h1 className={styles.h1}>Latest Articles</h1>
          <ul>
            {articles
              ?.filter((item, index) => index < 5 && item)
              .map(({ title, id, slug }) => {
                return (
                  <li key={id} className={styles.listItem}>
                    <Link
                      className={styles.articleLink}
                      to={`/article/${id}`}>
                      {title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
