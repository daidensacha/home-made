import { useParams, Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import Markdown from 'markdown-to-jsx';

import styles from '../styles/article.module.scss';

const Article = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find(article => article.id === id);

  // Convert date to readable format
  function convertDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  }

  return (
    <AnimatedPage>
      {article && (
        <div className={styles.post}>
          <div className={styles.imageContainer}>
            <img src={article.image_url} alt={article.image_title} />
          </div>
          <div className={styles.content}>
            <h1>{article.title}</h1>
            <p className={styles.date}>
              Author:{' '}
              <Link
                className={styles.link}
                to={`/articles/author/${article.author_id}`}>
                {' '}
                {article.author}
              </Link>{' '}
              Published: {convertDate(article.published_at)}
            </p>
            <div className={styles.postBody}>
              <Markdown>{article.body}</Markdown>
            </div>
          </div>
        </div>
      )}
    </AnimatedPage>
  );
};

export default Article;