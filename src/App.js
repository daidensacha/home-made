import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import Articles from './components/Articles';
import Article from './components/Article';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TagArticles from './components/TagArticles';
import Error from './components/Error';

import { client } from './components/Client.js';
import { useEffect, useState, useCallback } from 'react';

// Import style sheets
import 'normalize.css';
import './App.scss';

function App() {
  const location = useLocation();

  const [articles, setArticles] = useState([]);
  // const [blogData, setBlogData] = useState([]);

  const cleanData = useCallback(rawData => {
    const cleanedData = rawData.map(article => {
      const { sys, fields, metadata } = article;
      const { title, description, slug, author } = fields;
      const { id, createdAt } = sys;
      const imageUrl = fields.image.fields.file.url;
      const imageTitle = fields.image.fields.title;
      const post = fields.body.content[0].content[0].value;
      const tags = metadata.tags.map(item => item.sys.id);
      const updatedData = {
        title,
        description,
        slug,
        id,
        createdAt,
        imageUrl,
        imageTitle,
        post,
        tags,
        author,
      };
      return updatedData;
    });
    setArticles(cleanedData);
  }, []);

  // cleanData();
  console.log('Pre useEffect Aticles', articles);

  useEffect(() => {
    client.getEntries().then(function (entries) {
      // log all items that have a title
      const blogArticles = entries.items.filter(entry => entry.fields.title);
      console.log('blogArticles', blogArticles);
      // Use cleanDate function to save select fields from the raw data to state
      cleanData(blogArticles);
    });
  }, []);
  console.log('Post UseEffect Articles', articles);
  // console.log(articles);

  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path='/' element={<Home articles={articles} />} />

            <Route
              path='/article/:slug'
              element={<Article articles={articles} />}
            />

            <Route
              path='/tagArticles/:tag'
              element={<TagArticles articles={articles} />}
            />

            <Route
              path='/articles'
              element={<Articles articles={articles} />}
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
