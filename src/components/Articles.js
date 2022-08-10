import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import ArticlesCard from './ArticlesCard';
import Tags from './Tags';
import Author from './Author';

import styles from '../styles/articles.module.scss';

const Articles = ({ articles }) => {
  let arr = [];

  articles.map(element =>
    element.tags.map(tag => {
      return arr.push(tag);
    }),
  );
  const uniqueTags = [...new Set(arr)];
  console.log(uniqueTags);

  return (
    <AnimatedPage>
      <div className={styles.main}>
        {/* Start sidebar */}
        <div className={styles.sidebar}>
          <Author articles={articles} />

          <Tags articles={articles} />
        </div>
        {/* End Sidebar */}

        {/* Start Main content */}
        <div className={styles.content}>
          {articles.map(
            ({
              title,
              description,
              id,
              imageUrl,
              imageTitle,
              slug,
              post,
              createdAt,
            }) => {
              return (
                <ArticlesCard
                  key={id}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                  imageTitle={imageTitle}
                  slug={slug}
                  post={post}
                  createdAt={createdAt}
                />
              );
            },
          )}
        </div>
        {/* End Main content */}
      </div>
    </AnimatedPage>
  );
};

export default Articles;
