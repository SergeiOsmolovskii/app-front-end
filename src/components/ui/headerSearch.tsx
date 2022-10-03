import * as React from 'react';
import { useRef } from 'react';
import './../../styles/headerSearch.css';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { SearchInput } from './searchInput';

export const HeaderSearch = () => {

  const searchIcon = useRef<SVGSVGElement>(null);
  const hideIcon = useRef<SVGSVGElement>(null);
  const searchPanel = useRef<HTMLDivElement>(null);

  const showSearchPanel = () => {
      hideIcon.current?.classList.add('active');
      searchPanel.current?.classList.add('active');
  }

  const hideSearchPanel = () => {
    hideIcon.current?.classList.remove('active');
    searchPanel.current?.classList.remove('active');
  }

  return (
    <>
      <div className='header-search'>
        <span className='search-icons'>
          <SearchIcon className='search-panel__show' onClick={showSearchPanel} ref={searchIcon} />
          <CloseIcon className='search-panel__hide' onClick={hideSearchPanel} ref={hideIcon} />
        </span>
      </div>
      <SearchInput ref={searchPanel} />
    </>
  );
}