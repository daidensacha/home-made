import { useParams, Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import Markdown from 'markdown-to-jsx';

import styles from '../styles/article.module.scss';
// import ArticleIntro from './articleIntro';

const Article = ({ articles, authors }) => {
  const { id } = useParams();
  // console.log(id);
  console.log('articles', articles);
  console.log('authors', authors);
  const article = articles.find(article => article.id === id);
  console.log('article', article);

  const author = authors.find(author => author.id === article.author_id);
  console.log('author', author);
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