import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';
import styles from '../styles/articleCard.module.scss';


const ArticlesCard = ({
  id,
  title,
  postBody,
  slug,
  imageUrl,
  imageTitle,
  createdAt,
  publishDate,
  postAuthor,
  postAuthorId,
}) => {
  function convertDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={imageUrl} alt={imageTitle} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.heading}> {title} </h3>
        <p className={styles.date}>
          Author:{' '}
          <Link className={styles.link} to={`/articles/author/${postAuthorId}`}>
            {postAuthor}
          </Link>{' '}
          Published: {convertDate(publishDate)}{' '}
        </p>
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
        {/* <p className={styles.description}> {description} </p> */}
      </div>
      <div className={styles.footer}>
        {/* <Link className={styles.btn} to={`/article/${slug}`}>
          Read More
        </Link> */}
      </div>
    </div>
  );
};

export default ArticlesCard;
