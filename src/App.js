import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
      const { title, description, slug, postBody, publishDate } =
        fields;
      const { id, createdAt } = sys;
      const imageUrl = fields.image.fields.file.url;
      const imageTitle = fields.image.fields.title;
      const postAuthor = fields.postAuthor.fields.authorName;
      const postAuthorId = fields.postAuthor.sys.id;
      const authorBio = fields.postAuthor.fields.authorBio;
      const post = fields.body.content[0].content[0].value;
      const tags = metadata.tags.map(item => item.sys.id);
      // console.log("tags",tags)
      const updatedData = {
        title,
        description,
        slug,
        id,
        createdAt,
        imageUrl,
        imageTitle,
        post,
        postAuthor,
        postAuthorId,
        authorBio,
        postBody,
        publishDate,
        tags,
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
  // console.log('Post UseEffect Articles', articles);
  // console.log(articles);
  const [authors, setAuthors] = useState();

  useEffect(() => {
    client
      .getEntries()
      .then(entries => {
        // log all items that have a title
        const postAuthors = entries.items.filter(entry => entry.fields.authorName).reverse();
        console.log("postAuthors",postAuthors)
        const cleanedData = postAuthors?.map(author => {
          const { fields, sys } = author;
          const { id } = sys;
          const { authorName, authorBio, authorIntroduction } = fields;
          const  authorImageTitle  = fields.authorImage.fields.title;
          const  authorImageUrl  = fields.authorImage.fields.file.url;

          const updatedData = {
            id,
            authorName,
            authorIntroduction,
            authorBio,
            authorImageUrl,
            authorImageTitle,
          };
          return updatedData;
        })
        setAuthors(cleanedData);
      })
      .catch(err => console.log(err));
  }, []);
  console.log('authors', authors);
  // const authorsArticles = articles.filter(article => article.postAuthorId === "7joJ8TrNSBcUzFqkA8LxrO");
  // console.log("authorsArticles",authorsArticles)
  // console.log('articles', articles);
  // const authorsArticles = articles.filter(article => article.postAuthor === "Henry Lawson");
  // console.log('authorsArticles', authorsArticles);

  return (
    <div className='App'>
      <Header articles={articles} />
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
