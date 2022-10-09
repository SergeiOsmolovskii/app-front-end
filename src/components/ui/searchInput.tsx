import * as React from 'react';
import { forwardRef } from 'react';
import { Box } from '@mui/material';
import Input from '@mui/material/Input'
import './../../styles/searchInput.css';

export type Ref = HTMLDivElement;

export const SearchInput = forwardRef<Ref>((props, ref) => {

  return (
    <Box sx={{ backgroundColor: 'primary.main' }} ref={ref} className='search-input-box'>
      <Input sx={{ backgroundColor: 'primary.main', color: 'text.primary' }} type='text' placeholder='Search...'></Input>
    </Box>
  );
})