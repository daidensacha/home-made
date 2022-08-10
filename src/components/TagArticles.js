import { useParams } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import Tags from './Tags';
import Author from './Author';
import TaggedArticlesCard from './TaggedArticlesCard';

import styles from '../styles/tagArticles.module.scss';

const TagArticles = ({ articles }) => {
  const { tag } = useParams();
  console.log('tag = ', tag);
  console.log('articles ', articles);

  // let newArray = [];
  // const nestedTags = articles.map(article => {
  //   if (article.tags.includes(tag)) {
  //     newArray.push(article);
  //   }
  // });

  // const nestedTags2 = articles.map(article => {
  //   article.tags.filter((tag) )
  // })

  const filteredArticles = articles.filter(article =>
    article.tags.includes(tag),
  );
  console.log('filteredArticles', filteredArticles);
  // console.log('newArray', newArray);

  return (
    <AnimatedPage>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <Author articles={articles} />

          <Tags articles={articles} />
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
              createdAt,
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
                  createdAt={createdAt}
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
