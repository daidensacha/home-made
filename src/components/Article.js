import { useParams, Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import Markdown from 'markdown-to-jsx';

import styles from '../styles/article.module.scss';
// import ArticleIntro from './articleIntro';

const Article = ({ articles }) => {
  const { id } = useParams();
  console.log(id);

  const article = articles.find(article => article.id === id);
  console.log('article', article);

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
            <img src={article.imageUrl} alt={article.imageTitle} />
          </div>
          <div className={styles.content}>
            <h1>{article.title}</h1>
            <p className={styles.date}>
              Author:{' '}
              <Link
                className={styles.link}
                to={`/articles/author/${article.postAuthorId}`}>
                {' '}
                {article.postAuthor}
              </Link>{' '}
              Published: {convertDate(article.publishDate)}
            </p>
            <div className={styles.postBody}>
              <Markdown>{article.postBody}</Markdown>
            </div>
          </div>
        </div>
      )}
    </AnimatedPage>
  );
};

export default Article;
