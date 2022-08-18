import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/accordion.module.scss';
import { FaChevronRight } from 'react-icons/fa';
import cx from 'classnames';
import TextTruncate from 'react-text-truncate';

const Accordion = ({ authors, multiple = false }) => {
  // console.log('authors', authors);
  const [active, setActive] = useState(0);
  // console.log(data)

  return (
    <div className={styles.customAccordion}>
      <h3 className={styles.h3}>About the Authors</h3>
      {authors?.map((tab, index) => (
        // tab.key
        <AccordionItem
          key={tab.id}
          {...tab}
          active={active === tab.id}
          multiple={multiple}
          onToggle={e => setActive(a => (a === tab.id ? '' : tab.id))}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({
  id,
  authorName,
  authorBio,
  active,
  multiple,
  onToggle,
}) => {
  const [visibility, setVisibilty] = useState(false);
  const toggleVisibility = () => {
    setVisibilty(vis => !vis);
    onToggle();
  };

  const isActive = () => (multiple ? visibility : active);
  return (
    <div
      className={cx(
        `${styles.card} ${isActive() ? styles.accordionActive : ''}`,
      )}>
      <div className={styles.cardHeader} onClick={toggleVisibility}>
        {authorName}
        <span className={styles.accordionIcon}>
          <FaChevronRight />
        </span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.inner}>
          {/* <p>{authorIntro}</p> */}
          <TextTruncate
            line={3}
            element='p'
            truncateText=' …'
            text={authorBio}
            textTruncateChild={
                <Link className={styles.link} to={`/articles/author/${id}`}>
                  Read on >
                </Link>
            }
          />
          <Link className={styles.link} to={`/articles/authorArticles/${id}`}>
            Authors Articles >
          </Link>
          {/* <Link className={styles.btn} to={`/articles/author/${id}`}>
            Read on
          </Link> */}
          {/* <Link className={styles.btn} to={`/articles/authorArticles/${id}`}>
            View Articles
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
