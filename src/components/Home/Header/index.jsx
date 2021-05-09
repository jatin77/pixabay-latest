import React from 'react';
import logo from '../../../logo.png';
import './styles.css';

const Header = ({
  handleFormSubmit,
  handleInputChange,
  handleHomeClicked,
  searchInputValue,
}) => (
  <header>
    <div className='header-logo'>
      <img src={logo} alt='logo' />
    </div>
    <div className='header-rights'>
      <p>
        7e Edition <br /> - codefreeeze@gmail.com
      </p>
    </div>
    <form onSubmit={handleFormSubmit}>
      <div className='header-search'>
        <input
          value={searchInputValue}
          type='text'
          required
          onChange={handleInputChange}
        />
        <button className='search-icon'>
          <i className='fas fa-search'></i>
        </button>
      </div>
    </form>
    <div className='header-home'>
      <i className='fas fa-home' onClick={handleHomeClicked}></i>
    </div>
  </header>
);

export default Header;
