import { useParams } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import Tags from './Tags';
import Accordion from './Accordion';
// import Author from './Authors';
import TaggedArticlesCard from './TaggedArticlesCard';

import styles from '../styles/tagArticles.module.scss';

const TagArticles = ({ articles, authors }) => {
  const { tag } = useParams();
  // console.log('tag = ', tag);
  // console.log('articles ', articles);

  const filteredArticles = articles.filter(article =>
    article.tags.includes(tag),
  );
  console.log('filteredArticles', filteredArticles);
  // console.log('newArray', newArray);

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
              description,
              id,
              imageUrl,
              imageTitle,
              slug,
              post,
              postAuthor,
              postAuthorId,
              createdAt,
              publishDate,
            }) => {
              return (
                <TaggedArticlesCard
                  key={id}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                  imageTitle={imageTitle}
                  slug={slug}
                  post={post}
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
