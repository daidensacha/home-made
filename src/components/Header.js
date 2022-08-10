import React, { useState } from 'react';
import '../styles/header.scss';
// import logo from '../images/logo.png';
// import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';

// Import the NavLink component.
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

const Header = ({articles}) => {

  // Set state for search query
  const [query, setQuery] = useState('');

  const handleChange = event => {
    let lowerCaseQuery = event.target.value.toLowerCase();
    setQuery(lowerCaseQuery);
  };
  // console.log(query);
  // console.log("header", articles[0].title.toLowerCase());
  const filteredData = articles.filter((article) => {
    if (!query) {
      return ''
    } else {
    return article.title.toLowerCase().includes(query);
    }
  })
  console.log("filteredData", filteredData);


  return (
    <div className='header'>

{ query && (
       <div className='queryContainer'>
        <div className='searchResults'>
          <h3>Search results for "{query}" results:</h3>
          {filteredData.map((article) => {
            return (
                 <div key={article.id}>
                <NavLink
                className="articleLink"
                to={`/article/${article.slug}`}
                onClick={() => setQuery('')}
                >
                  {article.title}

                </NavLink>
              </div>
              )
            })
          }
        </div>
      </div>
)}
      <div className='logoWrapper'>
        <NavLink
        className="logoLink"
        to='/'>
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
