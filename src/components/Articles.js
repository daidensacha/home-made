// import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';

import ArticlesCard from './ArticlesCard';
import Accordion from './Accordion';
import Tags from './Tags';
// import AuthorModal from './AuthorModal';
// import Authors from './Authors';

import styles from '../styles/articles.module.scss';

const Articles = ({ articles, authors }) => {
  // let arr = [];
  // console.log('authors', authors);
  // articles.map(element =>
  //   element.tags.map(tag => {
  //     return arr.push(tag);
  //   }),
  // );
  // const uniqueTags = [...new Set(arr)];
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
              imageUrl,
              imageTitle,
              postBody,
              postAuthor,
              postAuthorId,
              createdAt,
              publishDate,
            }) => {
              return (
                <ArticlesCard
                  key={id}
                  id={id}
                  title={title}
                  imageUrl={imageUrl}
                  imageTitle={imageTitle}
                  postBody={postBody}
                  createdAt={createdAt}
                  publishDate={publishDate}
                  postAuthor={postAuthor}
                  postAuthorId={postAuthorId}
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
