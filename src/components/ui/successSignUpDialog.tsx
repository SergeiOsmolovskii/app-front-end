import * as React from 'react';
import { useState } from 'react';

import {Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export const SuccessSignUpDialog = (props: any) => {

  const openSignInDialog = () => {
    props.closeSuccessSignUpDialog();
    props.goToLogIn();
  }

  return (
    <Dialog open={props.openDialog} onClose={props.closeSuccessSignUpDialog}>
      <DialogTitle color="text.secondary">Registration completed successfully</DialogTitle>
        <Typography paragraph color="text.secondary" textAlign={"center"}>Now you can log in</Typography>
      <DialogActions sx={{justifyContent:"center"}}>
        <IconButton color="success" onClick={openSignInDialog}>
          <CheckCircleIcon color="success" fontSize="large"/>
        </IconButton>
      </DialogActions>
    </Dialog>
  );
}