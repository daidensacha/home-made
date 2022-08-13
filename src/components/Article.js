import { useParams } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import Markdown from 'markdown-to-jsx';

import styles from '../styles/article.module.scss';
// import ArticleIntro from './articleIntro';

const Article = ({ articles }) => {
  const { slug } = useParams();
  console.log(slug);

  const article = articles.find(article => article.slug === slug);
  console.log(article);

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
              Author: {article.author}{' '}
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
