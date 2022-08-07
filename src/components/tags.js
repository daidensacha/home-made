import { Link } from 'react-router-dom';

import styles from '../styles/tags.module.scss';

const Tags = ({ articles }) => {
  // const { tag } = useParams();
  // console.log("tag = ", tag);
  // console.log("articles ",articles);
  // const tagArticles = articles.filter(article => article.tag === tag);

  let arr = [];

  // console.log(arr);

  const list = articles?.map(element =>
    element.tags.map(tag => {
      return arr.push(tag);
    }),
  );
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
