import React, { useState } from 'react';
import '../styles/header.scss';

import { BsSearch } from 'react-icons/bs';

// Import the NavLink component.
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

const Header = ({ articles }) => {
  // Set state for search query
  const [query, setQuery] = useState('');
  const [toggleShow, setToggleShow] = useState(false);

  // Handle search query and set toggle show to true or false
  const handleChange = event => {
    let lowerCaseQuery = event.target.value.toLowerCase();
    setQuery(lowerCaseQuery);
    lowerCaseQuery.length > 0 ? setToggleShow(true) : setToggleShow(false);
  };
  // console.log('filter-articles', articles);
  //Filter articles by search query
  const filteredData = articles.filter(article => {
    if (!query) {
      return '';
    } else {
      return article.title.toLowerCase().includes(query);
    }
  });
  // console.log('filteredData', filteredData.length);

  // On click of link reset toggleShow to empty seach input and hide search results
  const clickHandler = e => {
    // Reset query value to empty string
    setQuery('');
    // Change toggleShow from true to false
    setToggleShow(!toggleShow);
  };



  return (
    <div className='header'>
      {/* Display class name dependent on toggleShow value true or false */}
      <div className={cx(`queryContainer ${toggleShow ? 'show' : ''}`)}>
        <div className='searchResults'>
          {filteredData.length ? (
            <h3>Search results for "{query}"</h3>
          ) : (
            <h3>No results for search "{query}"</h3>
          )}

          {filteredData.map(article => {
            return (
              <div key={article.id}>
                <NavLink
                  className='articleLink'
                  to={`/article/${article.id}`}
                  onClick={clickHandler}>
                  {article.title}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
      <div className='logoWrapper'>
        <NavLink className='logoLink' to='/'>
          <h3>Home Made</h3>
        </NavLink>
      </div>

      <div className='search'>
        <input
          name='search'
          type='text'
          value={query}
          placeholder='Search post titles ...'
          onChange={handleChange}
        />
        <button>
          <BsSearch />
        </button>
      </div>
      <nav>
        <NavLink
          className={cx('navlink', ({ isActive }) =>
            isActive ? 'active' : '',
          )}
          to='/'>
          Home
        </NavLink>
        <NavLink
          className={cx('navlink', ({ isActive }) =>
            isActive ? 'active' : '',
          )}
          to='/articles'>
          Articles
        </NavLink>
        <NavLink
          className={cx('navlink', ({ isActive }) =>
            isActive ? 'active' : '',
          )}
          to='/contact'>
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
