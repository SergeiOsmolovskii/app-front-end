import { type } from '@testing-library/user-event/dist/type';
import * as React from 'react';
import { forwardRef } from 'react';
import './../../styles/searchInput.css';

export type Ref = HTMLDivElement;

export const SearchInput = forwardRef<Ref> ((props, ref) => {
  
    return (
      <div ref={ref} className='search-input-box'>
        <input type='text' placeholder='Search'/>
      </div>
    );
  })