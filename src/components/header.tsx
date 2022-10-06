import Box from '@mui/material/Box/Box';
import * as React from 'react';

import './../styles/header.css';
import { Logo } from './ui/logo';
import { HeaderNav } from './ui/nav';

export const Header = (theme: any) => {
  const currentTheme = theme.currentTheme;
  const toggleColorMode = theme.mode;
  
  return (
    <Box component="header" className='header-main' height={80} sx={{backgroundColor: 'primary.main'}}> 
      <Logo/>
      <HeaderNav  currentTheme={currentTheme} mode={toggleColorMode}/>
    </Box>
  );
}