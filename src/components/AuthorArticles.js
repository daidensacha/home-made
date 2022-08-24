import React from 'react';
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import ArticlesCard from './ArticlesCard';
import Accordion from './Accordion';
import Tags from './Tags';
// import Authors from './Authors';

import styles from '../styles/articles.module.scss';

const AuthorArticles = ({ articles, authors }) => {
  const { author_id } = useParams();
  console.log('author_id', parseInt(author_id));
  console.log("Articles",articles)
// Filter for author articles
  articles = articles?.filter(article => article.author_id === parseInt(author_id));
  console.log("Articles",articles)


  let arr = [];
  // console.log('authors', authors);
  articles.map(element =>
    element.tags.map(tag => {
      return arr.push(tag);
    }),
  );
  const uniqueTags = [...new Set(arr)];
  // console.log(uniqueTags);

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
