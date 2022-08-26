import { useParams } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import Tags from './Tags';
import Accordion from './Accordion';
import TaggedArticlesCard from './TaggedArticlesCard';

import styles from '../styles/tagArticles.module.scss';

const TagArticles = ({ articles, authors }) => {
  const { tag } = useParams();

  const filteredArticles = articles.filter(article =>
    article.tags.includes(tag),
  );

  return (
    <AnimatedPage>
      <div className={styles.main}>
        <div className={styles.sidebar}>

          <div className={styles.container}>
            <Accordion authors={authors} />

            <Tags articles={articles} />
          </div>
        </div>
        {/* End Sidebar */}

        {/* Start Main content */}
        <div className={styles.content}>
          {filteredArticles.map(
            ({
              title,
              id,
              imageUrl,
              imageTitle,
              postBody,
              postAuthor,
              postAuthorId,
              createdAt,
              publishDate,
            }) => {
              return (
                <TaggedArticlesCard
                  key={id}
                  id={id}
                  title={title}
                  imageUrl={imageUrl}
                  imageTitle={imageTitle}
                  postBody={postBody}
                  postAuthor={postAuthor}
                  postAuthorId={postAuthorId}
                  createdAt={createdAt}
                  publishDate={publishDate}
                  articles={articles}
                />
              );
            },
          )}
        </div>
        {/* End Main content */}
      </div>
    </AnimatedPage>
  );
};

export default TagArticles;
