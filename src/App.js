import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { client } from './components/Client.js';
import { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Articles from './components/Articles';
import Article from './components/Article';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TagArticles from './components/TagArticles';
import Author from './components/Author';
import AuthorArticles from './components/AuthorArticles';
import Error from './404';
import jsonArticles from './data/articles';
import jsonAuthors from './data/authors';




// Import style sheets
import 'normalize.css';
import './App.scss';

function App() {

  console.log("jsonArticles",jsonArticles);
  console.log("jsonAuthors",jsonAuthors);
  

  const location = useLocation();

  const [articles, setArticles] = useState([]);
  // const [blogData, setBlogData] = useState([]);

  const cleanData = useCallback(rawData => {
    const cleanedData = rawData.map(article => {
      const { sys, fields, metadata } = article;
      const { title, postBody, publishDate } = fields;
      const { id, createdAt } = sys;
      const imageUrl = fields.image.fields.file.url;
      const imageTitle = fields.image.fields.title;
      const postAuthor = fields.postAuthor.fields.authorName;
      const postAuthorId = fields.postAuthor.sys.id;
      const authorBio = fields.postAuthor.fields.authorBio;
      const tags = metadata.tags.map(item => item.sys.id);
      // console.log("tags",tags)
      const updatedData = {
        title,
        // slug,
        postBody,
        publishDate,
        id,
        createdAt,
        imageUrl, // fields.image.fields.file.url
        imageTitle, // fields.image.fields.title
        postAuthor, // fields.postAuthor.fields.authorName
        postAuthorId, // fields.postAuthor.sys.id
        authorBio, // fields.postAuthor.fields.authorBio
        tags, // metadata.tags.map(item => item.sys.id) = Array of tag IDs
      };
      return updatedData;
    });
    setArticles(cleanedData);
  }, []);

  // cleanData();
  // console.log('Pre useEffect Aticles', articles);

  useEffect(() => {
    client
      .getEntries()
      .then(entries => {
        // log all items that have a title
        const blogArticles = entries.items.filter(entry => entry.fields.title);
        // console.log('blogArticles', blogArticles);
        // Use cleanDate function to save select fields from the raw data to state
        cleanData(blogArticles);
      })
      .catch(err => console.log(err));
  }, [cleanData]);
  console.log(articles);
  const articleJson = JSON.stringify(articles);
  // console.log("articleJson",articleJson);
  const [authors, setAuthors] = useState();

  useEffect(() => {
    client
      .getEntries()
      .then(entries => {
        // log all items that have a title
        const postAuthors = entries.items.filter(
          entry => entry.fields.authorName,
        );
        // console.log("postAuthors",postAuthors)
        const cleanedData = postAuthors?.map(author => {
          const { fields, sys } = author;
          const { id } = sys;
          const { authorName, authorBio, createdAt } = fields;
          const authorImageTitle = fields.authorImage.fields.title;
          const authorImageUrl = fields.authorImage.fields.file.url;

          const updatedData = {
            id,
            authorName,
            authorBio,
            authorImageUrl, // fields.authorImage.fields.file.url
            authorImageTitle, // fields.authorImage.fields.title
            createdAt,
          };
          return updatedData;
        });
        setAuthors(cleanedData);
      })
      .catch(err => console.log(err));
  }, []);
  // console.log('authors', authors);
  const authorJson = JSON.stringify(authors);
  console.log('authorJson', authorJson);

  return (
    <div className='App'>
      <Header articles={articles} />
      <div className='main'>
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path='/' element={<Home articles={articles} />} />

            <Route
              path='/article/:id'
              element={<Article articles={articles} />}
            />

            <Route
              path='/tagArticles/:tag'
              element={<TagArticles articles={articles} authors={authors} />}
            />

            <Route
              path='/articles'
              element={<Articles articles={articles} authors={authors} />}
            />
            <Route
              path='/articles/authorArticles/:authorId'
              element={<AuthorArticles articles={articles} authors={authors} />}
            />
            <Route
              path='/articles/author/:postAuthorId'
              element={<Author articles={articles} authors={authors} />}
            />
            <Route path='/contact' element={<Contact articles={articles} />} />

            <Route path='*' element={<Error />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
