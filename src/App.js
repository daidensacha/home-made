import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// import { client } from './components/Client.js';
import { useEffect, useState } from 'react';
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
// import jsonArticles from './data/db_articles';
// import jsonAuthors from './data/db_authors';




// Import style sheets
import 'normalize.css';
import './App.scss';

function App() {

  // console.log("jsonArticles",jsonArticles);
  // console.log("jsonAuthors",jsonAuthors);

  const location = useLocation();

  const [articles, setArticles] = useState([]);
  const [authors, setAuthors] = useState();


  useEffect(() => {
    const endpoint = 'http://localhost:3008/posts';
    const fetchArticles = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const results = await response.json();
        // console.log('articleResults', results);
        const cleanedArticles = results.map(article => {
          const { id, title, body, author, author_id, published_at, tags } = article;
          const image_title  = article.image.title;
          const image_url = article.image.url;
          const updatedData = {
            id,
            title,
            image_url,
            image_title,
            body,
            author,
            author_id,
            published_at,
            tags
          };
          return updatedData;
        })
        setArticles(cleanedArticles);
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
    // setArticles(jsonArticles);
  }, []);
  console.log("postCleanArticles", articles);
  // Save articles data to
  // const articleJson = JSON.stringify(articles);
  // console.log("articleJson",articleJson);


  useEffect(() => {
    const endpoint = 'http://localhost:3008/authors';
    const fetchAuthors = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const results = await response.json();
        const cleanedAuthors = results.map(author => {
          const { id, name, bio, created_at } = author;
          const image_title  = author.image.title;
          const image_url = author.image.url;
          const updatedData = {
            id,
            name,
            image_url,
            image_title,
            bio,
            created_at,
          };
          return updatedData;
        })
        setAuthors(cleanedAuthors);
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchAuthors();
    // setAuthors(jsonAuthors);
  }, []);
  // console.log('authors', authors);
  // const authorJson = JSON.stringify(authors);
  // console.log('authorJson', authorJson);
  console.log('appArticles', articles);
  console.log('appAuthors', authors);

  return (
    <div className='App'>
      <Header articles={articles} />
      <div className='main'>
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path='/' element={<Home articles={articles} />} />

            <Route
              path='/article/:id'
              element={<Article articles={articles} authors={authors} />}
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
              path='/articles/authorArticles/:author_id' // authorId
              element={<AuthorArticles articles={articles} authors={authors} />}
            />
            <Route
              path='/articles/author/:author_id' // postAuthorId
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
