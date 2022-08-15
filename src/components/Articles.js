import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import ArticlesCard from './ArticlesCard';
import Accordion from './Accordion';
import Tags from './Tags';
// import AuthorModal from './AuthorModal';
// import Authors from './Authors';

import styles from '../styles/articles.module.scss';

const Articles = ({ articles, authors }) => {
  const [modalOpen, setModalOpen] = useState(false);

  let arr = [];
  // console.log('authors', authors);
  articles.map(element =>
    element.tags.map(tag => {
      return arr.push(tag);
    }),
  );
  const uniqueTags = [...new Set(arr)];
  // console.log(uniqueTags);

  // Model open and close
  function openModal() {
    // On closing modal toggle modalOpen state to false
    setModalOpen(!modalOpen);
    // On closing modal reset inputValues to empty strings
    // const id = useRef(null)
  }

  return (
    <AnimatedPage>
      {/* <div className={styles.modalContainer}>
          <AuthorModal
            modalOpen={modalOpen}
            action={openModal}
            authors={authors}
            // authorName={authorName}
            // id={id}
          />
        </div> */}
      <div className={styles.main}>

        {/* Start sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.container}>
            {/* <div className={styles.authorsContainer}>
            <h3 className={styles.h3}>About the Authors</h3>
            {authors?.map(author => {
              return (
                <div key={author.id}>
                  <AuthorIntro
                    {...author}
                    openModal={openModal}
                    setModalOpen={setModalOpen}
                    modalOpen={modalOpen}
                  />
                </div>
              )
            })}
            </div> */}
            <Accordion authors={authors} />

            <Tags articles={articles} />
          </div>
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
              postAuthor,
              postAuthorId,
              createdAt,
              publishDate,
            }) => {
              return (
                <ArticlesCard
                  key={id}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                  imageTitle={imageTitle}
                  slug={slug}
                  post={post}
                  createdAt={createdAt}
                  publishDate={publishDate}
                  postAuthor={postAuthor}
                  postAuthorId={postAuthorId}
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

const AuthorIntro = ({ id, authorName, authorBio, authorIntroduction, setModalOpen, openModal  }) => {

  return (
    <div className={styles.card}>

    <div className={styles.cardHeader}>
      <h3 className={styles.h3}>{authorName}</h3>
    </div>
    <div className={styles.cardBody}>
      <div className={styles.inner}>
        <p>{authorIntroduction}</p>

         {/* <button className={styles.btn} onClick={openModal}>
              View Modal
        </button> */}
         <Link className={styles.btn} to={`/articles/author/${id}`}>View Bio</Link>
         <Link className={styles.btn} to={`/articles/authorArticles/${id}`}>
              View Articles
        </Link>
      </div>

    </div>
  </div>

  )
}

export default Articles;
