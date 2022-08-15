import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import Markdown from 'markdown-to-jsx';

import styles from '../styles/author.module.scss';

const Author = ({ articles, authors }) => {
  const { postAuthorId } = useParams();

  //  const authorsArticles = articles.filter(article => article.postAuthorId === postAuthorId);
  // console.log('authorsArticles', authorsArticles);

  const author = authors?.find(author => author.id === postAuthorId);
  // console.log('author', author);
  // console.log('authors: ', authors);

  return (
    <AnimatedPage>
      {author && (<div className={styles.main}>
        <div className={styles.authorBio}>
          <h1 className={styles.h1}>Author Bio</h1>
          <div className={styles.container}>
            <div className={styles.bioImage}>
              <img
                src={author?.authorImageUrl}
                alt={author?.authorImageTitle}
              />
            </div>
            <div className={styles.bioContent}>
              <h3 className={styles.h3}>{author?.authorName}</h3>
              <Markdown>{author?.authorBio}</Markdown>
              {/* <p>{author?.authorBio}</p> */}
              <div className={styles.authorBtns}>
              <Link
                className={styles.btn}
                to={`/articles/authorArticles/${author?.id}`}>
                Authors Articles
              </Link>
              <Link
                className={styles.btn}
                to={`/articles/`}>
                All Articles
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>)}
    </AnimatedPage>
  );
};

export default Author;
