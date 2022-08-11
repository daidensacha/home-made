import { Link } from 'react-router-dom';

import styles from '../styles/tags.module.scss';

const Tags = ({ articles }) => {
  let arr = [];

  // console.log(arr);
  // Iterate the articles array and push the unique tags to the arr array
  articles?.map(element =>
    element.tags.map(tag => {
      return arr.push(tag);
    }),
  );

  // Create a new array with unique tags
  const uniqueTags = [...new Set(arr)];
  // console.log(uniqueTags);

  return (
    <div className={styles.tags}>
      <h3 className={styles.h3}>Tags</h3>
      {uniqueTags?.map(tag => (
        <Link key={tag} className={styles.tag} to={`/tagArticles/${tag}`}>
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default Tags;
