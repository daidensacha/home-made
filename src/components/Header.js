import React, { useState, createContext } from 'react';
import '../styles/header.scss';
// import logo from '../images/logo.png';
// import { useDispatch, useSelector } from 'react-redux';
import {BsSearch} from 'react-icons/bs';

// Import the NavLink component.
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

const Header = () => {

  // Set state for search query
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value );
  }
  console.log(query)



  return (
    <div className='header'>
      <div className='logoWrapper'>
      {/* <img  className='logo' src={logo} alt='logo' /> */}
      <h3>Home Made</h3>
      </div>
      <div className='search'>
        <input name="search" type='text' placeholder='Search post titles ...' onChange={handleChange}/>
        <button>
          <BsSearch />
        </button>
      </div>
      <nav>
        <NavLink
          className={cx('navlink', ({ isActive }) => (isActive ? 'active' : ''))}
          to='/'
        >Home</NavLink>
        <NavLink
          className={cx('navlink', ({ isActive }) => (isActive ? 'active' : ''))}
          to='/articles'
        >Articles</NavLink>
        <NavLink
          className={cx('navlink', ({ isActive }) => (isActive ? 'active' : ''))}
          to='/contact'

          >Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
