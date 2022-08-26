import React from 'react';
import { useParams } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import ArticlesCard from './ArticlesCard';
import Accordion from './Accordion';
import Tags from './Tags';

import styles from '../styles/articles.module.scss';

const AuthorArticles = ({ articles, authors }) => {
  const { author_id } = useParams();

// Filter for author articles
  articles = articles?.filter(article => article.author_id === author_id);
  console.log("Articles",articles)

  return (
    <AnimatedPage>
      <div className={styles.main}>
        {/* Start sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.container}>
            <Accordion authors={authors} />

            <Tags articles={articles} />
          </div>
        </div>
        {/* End Sidebar */}

        {/* Start Main content */}
        <div className={styles.content}>
          {articles.map(
            ({
              title,
              // description,
              id,
              image_url,
              image_title,
              body,
              author,
              author_id,
              created_at,
              published_at,
            }) => {
              return (
                <ArticlesCard
                  key={id}
                  id={id}
                  title={title}
                  image_url={image_url}
                  image_title={image_title}
                  body={body}
                  created_at={created_at}
                  published_at={published_at}
                  author={author}
                  author_id={author_id}
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

export default AuthorArticles;