import styles from '../styles/tagArticle.module.scss';
import { Link } from 'react-router-dom';

const TagArticle = ({ title, description, slug }) => {
  return (
    // {articles.map(article => console.log(article.fields.title))}

    <div className={styles.articleIntro}>
      <h3 className={styles.heading}> {title} </h3>
      <p className={styles.description}> {description} </p>
      <Link className={styles.btn} to={`/article/${slug}`}>
        Read More
      </Link>
    </div>
  );
};

export default TagArticle;
