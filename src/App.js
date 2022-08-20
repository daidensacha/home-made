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

  // console.log("jsonArticles",jsonArticles);
  // console.log("jsonAuthors",jsonAuthors);

  const location = useLocation();

  const [articles, setArticles] = useState([]);
  const [authors, setAuthors] = useState();

  useEffect(() => {
    setArticles(jsonArticles);
  }, []);
  console.log("atcicles", articles);
  // Save articles data to 
  // const articleJson = JSON.stringify(articles);
  // console.log("articleJson",articleJson);


  useEffect(() => {
    setAuthors(jsonAuthors);
  }, []);
  console.log('authors', authors);
  // const authorJson = JSON.stringify(authors);
  // console.log('authorJson', authorJson);

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
