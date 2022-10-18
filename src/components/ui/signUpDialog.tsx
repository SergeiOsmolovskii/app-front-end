import * as React from 'react';
import { useState } from 'react';

import Dialog from '@mui/material/Dialog/Dialog';
import DialogTitle from '@mui/material/DialogTitle/DialogTitle';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DialogActions from '@mui/material/DialogActions/DialogActions';
import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import Box from '@mui/material/Box/Box';
import IconButton from '@mui/material/IconButton/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { IShowPassword } from 'models/IShowPassword';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const SignUpDialog = (props: any) => {

  const [values, setValues] = useState<IShowPassword>({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Dialog open={props.openDialog} onClose={props.handleCloseDialog}>
      <Box component="form">
        <DialogTitle color="text.secondary">Sign up</DialogTitle>

        <DialogContent>
          <TextField
            autoComplete='on'
            autoFocus
            required
            margin="dense"
            id="login"
            label="Login"
            type="text"
            fullWidth
            variant="standard"
            color="secondary"
          />

          <TextField
            autoComplete='on'
            required
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            color="secondary"
          />

          <TextField
            autoComplete='on'
            required
            margin="dense"
            id="password"
            label="Password"
            type={values.showPassword ? 'text' : 'password'}
            fullWidth
            variant="standard"
            color='secondary'

            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            autoComplete='on'
            required
            margin="dense"
            id="passwordRepeat"
            label="Re-enter your password"
            type='password'
            fullWidth
            variant="standard"
            color='secondary'
          />

        </DialogContent>

        <DialogActions>
          <IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }} onClick={props.handleCloseDialog}>
            <CloseIcon />
          </IconButton>
          <Button variant='contained' color='primary'>Sign Up</Button>
        </DialogActions>
      </Box>
    </Dialog>
  )

}