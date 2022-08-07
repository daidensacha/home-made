import { useParams } from 'react-router-dom';
import AnimatedPage from '../components/animatedPage';
import Tags from '../components/tags';
import TagArticle from '../components/tagArticle';

import styles from '../styles/tagArticles.module.scss';

const TagArticles = ({ articles }) => {
  const { tag } = useParams();
  console.log('tag = ', tag);
  console.log('articles ', articles);


  let newArray = [];
  const nestedTags = articles.map(article => {
    if (article.tags.includes((tag))) {
      newArray.push(article);
    }
  })

  // const nestedTags2 = articles.map(article => {
  //   article.tags.filter((tag) )
  // })

 const filteredArticles = articles.filter(article => (article.tags.includes(tag)));
  console.log("filteredArticles", filteredArticles);
  console.log("newArray", newArray);

  // return (
  //   <AnimatedPage>

  //    {filteredArticles.map(article => {
  //     return (
  //       <div className={styles.post}>
  //       <h1>Heloo world</h1>
  //       </div>
  //     )
  //    })

  //   }

  //   </AnimatedPage>
  // );
  return (
    <AnimatedPage>
      <div className={styles.main}>
        <div className={styles.sidebar}>


          <div className={styles.categories}>
            <h3 className={styles.h3}>Categories</h3>
            <hr />
            <hr/>

            <ul>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
              <li>Category 4</li>
              <li>Category 5</li>
            </ul>
          </div>

          <Tags articles={articles} />

          {/* <div className={styles.tags}>
            <h3 className={styles.h3}>Tags</h3>
            {uniqueTags?.map((tag) =>
              <Link key={tag} className={styles.tag} to={`/articles/${tag}`} >
              {tag}
              </Link>
            )}
          </div> */}


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
                <TagArticle
                  key={id}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                  imageTitle={imageTitle}
                  slug={slug}
                  post={post}
                  createdAt={createdAt}
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
