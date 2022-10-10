import * as React from 'react';
import { forwardRef } from 'react';
import './../../styles/toggleNav.css';

export const ToggleNav = forwardRef<HTMLElement>((props, ref) => {
  let nav = ref as React.MutableRefObject<HTMLElement>;
  
  const toggle = () => {
    nav.current?.classList.toggle('aside-nav--active');
  }

  return (
    <button className='aside-nav--toggle-button' onClick={toggle}></button>
  )
});