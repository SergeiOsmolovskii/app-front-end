import * as React from 'react';

import './../styles/header.css';
import { Logo } from './ui/logo';
import { HeaderNav } from './ui/nav';

export const Header = () => {

  
  return (
    <header className='header-main'>
      <Logo/>
      <HeaderNav/>
    </header>
  );
}

