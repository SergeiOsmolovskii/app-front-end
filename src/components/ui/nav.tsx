import * as React from 'react';

import IconButton from '@mui/material/IconButton/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import './../../styles/nav.css';
import { HeaderSearch } from './headerSearch';

export const HeaderNav = (currentTheme: any) => {
  const theme = currentTheme.currentTheme;
  
  return (
    <nav className='header-navigation'>
      <ul className='header-navigation-list'>
        <li className='header-navigation-list--item'><a href='#'>Home</a></li>
        <li className='header-navigation-list--item'><a href='#'>About</a></li>
        <li className='header-navigation-list--item'><a href='#'>Contact</a></li>
      </ul>
      <HeaderSearch/>
      <IconButton onClick={currentTheme.mode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </nav>
  );
}