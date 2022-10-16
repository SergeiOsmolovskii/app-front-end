import * as React from 'react';
import './../../styles/nav.css';

import Box from '@mui/material/Box/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { HeaderSearch } from './headerSearch';
import Link from '@mui/material/Link/Link';

export const HeaderNav = (currentTheme: any) => {
  const theme = currentTheme.currentTheme;
  
  const changeTheme = () => {
    currentTheme.mode.toggleColorMode();
    let prevMode = theme.palette.mode === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', prevMode);
  }

  return (

<Box component="nav" className='header-navigation'>
      <List className='header-navigation-list'>

        <ListItem className='header-navigation-list--item'>
          <Link href='#'>Home</Link>
        </ListItem>

        <ListItem className='header-navigation-list--item'>
          <Link href='#'>About</Link>
        </ListItem>

        <ListItem className='header-navigation-list--item'>
          <Link href='#'>Contact</Link>
        </ListItem>

      </List>
        <HeaderSearch />
        <IconButton onClick={changeTheme} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    </Box>
  
  );
}