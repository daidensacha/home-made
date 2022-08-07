import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/animatedPage';
import ArticleIntro from '../components/articleIntro';
import Tags from '../components/tags';

import styles from '../styles/articles.module.scss';


const Articles = ({ articles }) => {
  let arr = [];

  // const newarr = articles.map(item => item === tags ? item.map((tag) => tag): item);
  // console.log(arr);

  articles.map(element =>
    element.tags.map(tag => {
      return arr.push(tag);
    }),
  );
  const uniqueTags = [...new Set(arr)];
  console.log(uniqueTags);



  return (
    <AnimatedPage>
      <div className={styles.main}>
        <div className={styles.sidebar}>


          <div className={styles.author}>
            <h3 className={styles.h3}>About the Author</h3>
            <p>I'm passionate about preserving the old ways of growing, baking, preserving, cooking. This blog is where I share the wisdom that benefits us all.</p>
            {/* <ul>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
              <li>Category 4</li>
              <li>Category 5</li>
            </ul> */}
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
          {articles.map(
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
                <ArticleIntro
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

export default Articles;
