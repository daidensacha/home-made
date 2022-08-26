import styles from '../styles/taggedArticlesCard.module.scss';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';

const TaggedArticlesCard = ({
  id,
  title,
  body,
  image_url,
  image_title,
  author,
  author_id,
  published_at,
}) => {
  function convertDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  }

  return (
    title && body && id ? (
      <div className={styles.card}>
        <div className={styles.header}>
          <img src={image_url} alt={image_title} />
        </div>
        <div className={styles.body}>
          <h3 className={styles.heading}> {title} </h3>
          <p className={styles.date}>Author: <Link className={styles.link} to={`/articles/author/${author_id}`}>{author}</Link> Published: {convertDate(published_at)} </p>
          <TextTruncate
            line={3}
            element="p"
            truncateText=" …"
            text={body}
            textTruncateChild={
              <Link className={styles.readMoreLink} to={`/article/${id}`}>
                Read More
              </Link>
            }
          />
        </div>
        <div className={styles.footer}>
        </div>
      </div>
    ) : (
      // render error page on 404
      <h1>Page not found</h1>
    )
  );
};

export default TaggedArticlesCard;
