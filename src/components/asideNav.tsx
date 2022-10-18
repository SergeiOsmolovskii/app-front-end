import * as React from 'react';
import './../styles/asideNav.css';
import { Box, Link } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ToggleNav } from './ui/toggleNav';
import { useRef, useState } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { SignInDialog } from './ui/signInDialog';
import { SignUpDialog } from './ui/signUpDialog';

export const AsideNav = () => {

  const asideNav = useRef<HTMLElement>(null);

  const [openSignInDialog, setSignInDialog] = useState(false);
  
  
  const handleClickOpenSignInDialog = () => { 
    setSignInDialog(true); 
  };
  
  const handleClickCloseSignInDialog = () => {
    setSignInDialog(false);
  };
  
  const [openSignUpDialog, setSignUpDialog] = useState(false);

  const handleClickOpenSignUpDialog = () => {
    setSignUpDialog(true);
  };

  const handleClickCloseSignUpDialog = () => {
    setSignUpDialog(false);
  };

  return (
    <Box component="nav" className='aside-nav' ref={asideNav} sx={{backgroundColor: 'primary.main', borderLeft: '10px solid', borderColor: 'primary.main'}}>
      <List className='aside-nav-list'>
        
        <ListItem className='aside-nav-list--item' color="text.primary">
          <PersonIcon className='aside-nav--icon' fontSize='large'/>
          <Box component="span" className='aside-nav-list--item--text'>User name</Box>
        </ListItem>

        <ListItem className='aside-nav-list--item' color="text.primary">
          <Link component={RouterLink} to='/' color="text.primary" sx={{display: 'flex', alignItems: 'center'}} >
            <HomeIcon className='aside-nav--icon' fontSize='large'/>
            <Box component="span" className='aside-nav-list--item--text'>Home</Box>
          </Link>
        </ListItem>

        <ListItem className='aside-nav-list--item' color="text.primary">
          <Link component={RouterLink} to='/help' color="text.primary" sx={{display: 'flex', alignItems: 'center'}} >
            <QuestionMarkIcon className='aside-nav--icon' fontSize='large'/>
            <Box component="span" className='aside-nav-list--item--text'>Help</Box>
          </Link>
        </ListItem>

        <ListItem className='aside-nav-list--item' color="text.primary">
          <Link component={RouterLink} to='/settings' color="text.primary" sx={{display: 'flex', alignItems: 'center'}} >
            <SettingsIcon className='aside-nav--icon' fontSize='large'/>
            <Box component="span" className='aside-nav-list--item--text'>Settings</Box>
          </Link>
        </ListItem>

        <ListItem onClick={handleClickOpenSignUpDialog} className='aside-nav-list--item' color="text.primary">
          <LogoutIcon className='aside-nav--icon' fontSize='large'/>
          <Box component="span" className='aside-nav-list--item--text'>Log out</Box>
        </ListItem>

        <ListItem onClick={handleClickOpenSignInDialog} className='aside-nav-list--item' color="text.primary">
          <ExitToAppIcon className='aside-nav--icon' fontSize='large'/>
          <Box component="span" className='aside-nav-list--item--text'>Log in</Box>
        </ListItem>

      </List>

        <SignInDialog openDialog={openSignInDialog} handleCloseDialog={handleClickCloseSignInDialog} openSignUpDialog={handleClickOpenSignUpDialog}/>
        <SignUpDialog openDialog={openSignUpDialog} handleCloseDialog={handleClickCloseSignUpDialog} />
      <ToggleNav ref={asideNav}/>
    </Box>
  );
}
