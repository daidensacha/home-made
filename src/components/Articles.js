// import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';

import ArticlesCard from './ArticlesCard';
import Accordion from './Accordion';
import Tags from './Tags';
// import AuthorModal from './AuthorModal';
// import Authors from './Authors';

import styles from '../styles/articles.module.scss';

const Articles = ({ articles, authors }) => {
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
              id,
              image_url,
              image_title,
              body,
              author,
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
