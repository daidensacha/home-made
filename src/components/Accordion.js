import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/accordion.module.scss';
import { FaChevronRight } from 'react-icons/fa';
import cx from 'classnames';

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
  authorIntroduction,
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
          <p>{authorIntroduction}</p>
          <Link className={styles.btn} to={`/articles/author/${id}`}>
            View Bio
          </Link>
          <Link className={styles.btn} to={`/articles/authorArticles/${id}`}>
            View Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
