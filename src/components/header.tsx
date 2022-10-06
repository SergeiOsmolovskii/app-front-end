import * as React from 'react';

import './../styles/header.css';
import { Logo } from './ui/logo';
import { HeaderNav } from './ui/nav';

export const Header = (theme: any) => {
  const currentTheme = theme.currentTheme;
  const toggleColorMode = theme.mode;
  console.log(toggleColorMode)
  
  return (
    <header className='header-main'>
      <Logo/>
      <HeaderNav currentTheme={currentTheme} mode={toggleColorMode} />
    </header>
  );
}

