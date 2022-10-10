import * as React from 'react';
import './../styles/asideNav.css';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { ToggleNav } from './ui/toggleNav';
import { useRef } from 'react';

export const AsideNav = () => {

  const asideNav = useRef<HTMLElement>(null);

  return (
    <Box component="nav" className='aside-nav' ref={asideNav} sx={{backgroundColor: 'primary.main', borderLeft: '10px solid', borderColor: 'primary.main'}}>
      <List className='aside-nav-list'>
        
        <ListItem className='aside-nav-list--item'>
          <PersonIcon className='aside-nav--icon' fontSize='large'/>
          <Box component="span" className='aside-nav-list--item--text'>User name</Box>
        </ListItem>

        <ListItem className='aside-nav-list--item'>
          <HomeIcon className='aside-nav--icon' fontSize='large'/>
          <Box component="span" className='aside-nav-list--item--text'>Home</Box>
        </ListItem>

        <ListItem className='aside-nav-list--item'>
          <QuestionMarkIcon className='aside-nav--icon' fontSize='large'/>
          <Box component="span" className='aside-nav-list--item--text'>Help</Box>
        </ListItem>

        <ListItem className='aside-nav-list--item'>
          <SettingsIcon className='aside-nav--icon' fontSize='large'/>
          <Box component="span" className='aside-nav-list--item--text'>Settings</Box>
        </ListItem>

        <ListItem className='aside-nav-list--item'>
          <LogoutIcon className='aside-nav--icon' fontSize='large'/>
          <Box component="span" className='aside-nav-list--item--text'>Log out</Box>
        </ListItem>

      </List>

      <ToggleNav ref={asideNav}/>
    </Box>
  );
}
