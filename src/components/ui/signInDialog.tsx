import * as React from 'react';
// import './../styles/signInDialog.css';
import Dialog from '@mui/material/Dialog/Dialog';
import DialogTitle from '@mui/material/DialogTitle/DialogTitle';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DialogActions from '@mui/material/DialogActions/DialogActions';
import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import Box from '@mui/material/Box/Box';
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';

import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
  
interface State {
    password: string;
    showPassword: boolean;
  }

  export const SignInDialog = (props: any) => {

  const [values, setValues] = React.useState<State>({
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
        <DialogTitle color="text.secondary">Sign in</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="login"
            label="Login"
            type="text"
            fullWidth
            variant="standard"
            color="secondary"
          />

          <TextField
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

        </DialogContent>
        <DialogActions>
          <IconButton sx={{position: 'absolute', top: '10px', right:'10px'}} onClick={props.handleCloseDialog}>
            <CloseIcon/>
          </IconButton>
          <Button variant='contained' color='primary'>Log in</Button>
        </DialogActions>
      </Box>
    </Dialog>

  );
}