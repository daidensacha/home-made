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
            {/* {blogPosts.map(({fields:{title}}) => <p>{title}</p>)} */}
            {articles.map(({ title, id, slug }, index) => {
              if (index < 5) {
                return (
                  <li key={id} className={styles.listItem}>
                    <Link
                      className={styles.articleLink}
                      to={`/article/${slug}`}>
                      {title}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
