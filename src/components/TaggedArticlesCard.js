import styles from '../styles/taggedArticlesCard.module.scss';
import { Link } from 'react-router-dom';
// import AnimatedPage from './AnimatedPage';

const TaggedArticlesCard = ({
  title,
  description,
  slug,
  imageUrl,
  imageTitle,
  postAuthor,
  postAuthorId,
  createdAt,
  publishDate,
}) => {
  function convertDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  }

  return (
    // {articles.map(article => console.log(article.fields.title))}
    // <AnimatedPage>
    title && description && slug ? (
      <div className={styles.card}>
        <div className={styles.header}>
          <img src={imageUrl} alt={imageTitle} />
        </div>
        <div className={styles.body}>
          <h3 className={styles.heading}> {title} </h3>
          <p className={styles.date}>Author: <Link className={styles.link} to={`/articles/author/${postAuthorId}`}>{postAuthor} </Link> Published: {convertDate(publishDate)} </p>
          <p className={styles.description}> {description} </p>
        </div>
        <div className={styles.footer}>
          <Link className={styles.btn} to={`/article/${slug}`}>
            Read More
          </Link>
        </div>
      </div>
    ) : (
      // render error page on 404
      <h1>Page not found</h1>
    )
    // </AnimatedPage>
  );
};

export default TaggedArticlesCard;
