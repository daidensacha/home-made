import styles from '../styles/taggedArticlesCard.module.scss';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';

const TaggedArticlesCard = ({
  id,
  title,
  postBody,
  imageUrl,
  imageTitle,
  postAuthor,
  postAuthorId,
  publishDate,
}) => {
  function convertDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  }
  return (
    title && postBody ? (
      <div className={styles.card}>
        <div className={styles.header}>
          <img src={imageUrl} alt={imageTitle} />
        </div>
        <div className={styles.body}>
          <h3 className={styles.heading}> {title} </h3>
          <p className={styles.date}>Author: <Link className={styles.link} to={`/articles/author/${postAuthorId}`}>{postAuthor}</Link> Published: {convertDate(publishDate)} </p>
          <TextTruncate
            line={3}
            element="p"
            truncateText=" …"
            text={postBody}
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
      <h1>Page not found</h1>
    )
  );
};

export default TaggedArticlesCard;
