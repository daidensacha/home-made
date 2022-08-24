import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import Markdown from 'markdown-to-jsx';

import styles from '../styles/author.module.scss';

const Author = ({ articles, authors }) => {
  const { author_id } = useParams();

  const author = authors?.find(author => author.id === parseInt(author_id));
  console.log('author', author);
  // console.log('authors: ', authors);

  return (
    <AnimatedPage>
      {author && (<div className={styles.main}>
        <div className={styles.authorBio}>
          <h1 className={styles.h1}>Author Bio</h1>
          <div className={styles.container}>
            <div className={styles.bioImage}>
              <img
                src={author?.image_url}
                alt={author?.image_title}
              />
            </div>
            <div className={styles.bioContent}>
              <h3 className={styles.h3}>{author?.name}</h3>
              {/* <Markdown>{author?.bio}</Markdown> */}
              <p>{author?.bio}</p>
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
