import * as React from 'react';
import { useRef, useState } from 'react';
import './../styles/asideNav.css';
import { Alert, Box, Link, Snackbar } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ToggleNav } from './ui/toggleNav';
import { Link as RouterLink } from 'react-router-dom';
import { SignInDialog } from './ui/signInDialog';
import { SignUpDialog } from './ui/signUpDialog';
import { SuccessSignUpDialog } from './ui/successSignUpDialog';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { userSlice } from 'store/reducers/userSlice';

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

  const [openSuccessSignUpDialog, setSuccessSignUpDialog] = useState(false);

  const handleClickOpenSuccessSignUpDialog = () => {
    setSuccessSignUpDialog(true);
  };

  const handleClickCloseSuccessSignUpDialog = () => {
    setSuccessSignUpDialog(false);
  };

  const [openSnackBar, setOpenSnackBar ] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  const userLogin = useAppSelector(state => state.userReducer.login);
  const userEmail = useAppSelector(state => state.userReducer.email);
  const isAuth = useAppSelector(state => state.userReducer.isAuth);

  const dispatch = useAppDispatch();

  const logOutUser = () => {
    dispatch(userSlice.actions.logOutUser());  
    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');
    setOpenSnackBar(true);
    setSnackBarMessage('You have successfully logged out');
  }

  return (
    <Box component="nav" className='aside-nav' ref={asideNav} sx={{backgroundColor: 'primary.main', borderLeft: '10px solid', borderColor: 'primary.main'}}>
      <List className='aside-nav-list'>
      {isAuth ?
        (<ListItem className='aside-nav-list--item' color="text.primary">
          <PersonIcon className='aside-nav--icon' fontSize='large'/>
          <Box component="span" className='aside-nav-list--item--text' title={userEmail}>{userLogin}</Box>
        </ListItem>) : null
      }

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
        {isAuth ?
          (<ListItem className='aside-nav-list--item' color="text.primary">
            <Link component={RouterLink} to='/settings' color="text.primary" sx={{ display: 'flex', alignItems: 'center' }} >
              <SettingsIcon className='aside-nav--icon' fontSize='large' />
              <Box component="span" className='aside-nav-list--item--text'>Settings</Box>
            </Link>
          </ListItem>) : null
        }

        {isAuth ? 
          (<ListItem onClick={logOutUser} className='aside-nav-list--item' color="text.primary">
            <LogoutIcon className='aside-nav--icon' fontSize='large'/>
            <Box component="span" className='aside-nav-list--item--text'>Log out</Box>
          </ListItem>)
          : (<ListItem onClick={handleClickOpenSignInDialog} className='aside-nav-list--item' color="text.primary">
            <ExitToAppIcon className='aside-nav--icon' fontSize='large'/>
            <Box component="span" className='aside-nav-list--item--text'>Log in</Box>
          </ListItem>)
        }
      </List> 

      <SignInDialog
        openDialog={openSignInDialog} 
        handleCloseDialog={handleClickCloseSignInDialog} 
        openSignUpDialog={handleClickOpenSignUpDialog}
        openSnackBar={setOpenSnackBar}
        snackBarMessage={setSnackBarMessage}
      />
      
      <SignUpDialog 
        openDialog={openSignUpDialog} 
        handleCloseDialog={handleClickCloseSignUpDialog} 
        openSignInDialog={handleClickOpenSignInDialog} 
        openSuccessSignUpDialog={handleClickOpenSuccessSignUpDialog}
      />
              
      <SuccessSignUpDialog 
        openDialog={openSuccessSignUpDialog} 
        closeSuccessSignUpDialog={handleClickCloseSuccessSignUpDialog} 
        goToLogIn={handleClickOpenSignInDialog} 
      />

      <Snackbar
        sx={{ bottom: "100px !important",}}
        open={openSnackBar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackBar(false)}
        
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          severity="success" 
          sx={{ width: '100%' }}
          onClose={() => setOpenSnackBar(false)}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>


      <ToggleNav ref={asideNav}/>
    </Box>
  );
}
