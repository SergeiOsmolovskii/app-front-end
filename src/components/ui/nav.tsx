import * as React from 'react';
import './../../styles/nav.css';
import { HeaderSearch } from './headerSearch';


export const HeaderNav = () => {
  
  
  return (
    <nav className='header-navigation'>
      <ul className='header-navigation-list'>
        <li className='header-navigation-list--item'><a href='#'>Home</a></li>
        <li className='header-navigation-list--item'><a href='#'>About</a></li>
        <li className='header-navigation-list--item'><a href='#'>Contact</a></li>
      </ul>
      <HeaderSearch/>
    </nav>
  );
}