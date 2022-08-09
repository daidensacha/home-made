import styles from '../styles/tagArticle.module.scss';
import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';

const TagArticle = ({ title, description, slug }) => {
  return (
    // {articles.map(article => console.log(article.fields.title))}
    // <AnimatedPage>
      title && description && slug ? (
        <div className={styles.articleIntro}>
          <h3 className={styles.heading}> {title} </h3>
          <p className={styles.description}> {description} </p>
          <Link className={styles.btn} to={`/article/${slug}`}>
            Read More
          </Link>
        </div>
      ) : (
        // render error page on 404
        <h1>Page not found</h1>
      )
    // </AnimatedPage>
  );
};

export default TagArticle;
