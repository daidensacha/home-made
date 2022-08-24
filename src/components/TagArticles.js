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
              id,
              image_url,
              image_title,
              body,
              author,
              author_id,
              created_at,
              published_at,
            }) => {
              return (
                <TaggedArticlesCard
                  key={id}
                  id={id}
                  title={title}
                  image_url={image_url}
                  image_title={image_title}
                  body={body}
                  author={author}
                  author_id={author_id}
                  created_at={created_at}
                  published_at={published_at}
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