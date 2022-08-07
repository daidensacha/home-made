import React, { createContext } from 'react';
import '../styles/header.scss';
// import logo from '../images/logo.png';
// import { useDispatch, useSelector } from 'react-redux';

// Import the NavLink component.
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

const Header = () => {
  return (
    <div className='header'>
      <div className='logoWrapper'>
      {/* <img  className='logo' src={logo} alt='logo' /> */}
      <h3>Home Made</h3>
      </div>
      <nav>
        <NavLink
          className={cx('navlink', ({ isActive }) => (isActive ? 'active' : ''))}
          // activeClassName="active"
          to='/'
          // style={({ isActive }) =>
          //               (isActive ? {color: '#00bcd4'} : {color: '#212121'})}
        >Home</NavLink>
        <NavLink
          className={cx('navlink', ({ isActive }) => (isActive ? 'active' : ''))}
          // activeClassName="active"
          to='/articles'
          // style={({ isActive }) =>
          //               (isActive ? {color: '#00bcd4'} : {color: '#212121'})}
        >Articles</NavLink>
        <NavLink
          className={cx('navlink', ({ isActive }) => (isActive ? 'active' : ''))}
          // activeClassName="active"
          to='/contact'
          // style={({ isActive }) =>
          //               (isActive ? {color: '#00bcd4'} : {color: '#212121'})}
          >Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
