import * as React from 'react';
import { useEffect, useState } from 'react';
import '../../styles/signInDialog.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Box, TextField, List, ListItem, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff, Clear as ClearIcon } from '@mui/icons-material';
import { IShowPassword } from '../../models/IShowPassword';
import { signIn } from '../../services/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthParams } from 'models/IUser';
import { useAppDispatch } from 'hooks/redux';
import { featchUser } from 'store/reducers/actionsCreators';
import jwt_decode from 'jwt-decode';


export const SignInDialog = (props: any) => {

  const [values, setValues] = useState<IShowPassword>({
    password: '',
    showPassword: false,
  });

  const [submitError, setSubmitError] = useState<string>('');
  
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const closeSignInDialogOpenSignUpDialog = () => {
    props.handleCloseDialog();
    props.openSignUpDialog();
  }

  const { register, handleSubmit, formState: { errors, touchedFields }, reset } = useForm<IAuthParams>(
    {
      mode: 'onBlur',
    });

  const dispatch = useAppDispatch();
  
  const onSubmit: SubmitHandler<IAuthParams> = async (data) => {
  
    try {
      const response = await signIn(data);
      if (response.status === 201) {
        const decodedAccessToken: any = jwt_decode(response.data.accessToken);
        dispatch(featchUser(decodedAccessToken.userId));
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        props.handleCloseDialog();
        props.openSnackBar(true);
        props.snackBarMessage('You have successfully logged in!');
      }
    } catch (error: Error | any) {
      if (error.response.status === 403) {
        setSubmitError('Invalid login or password');
      }
      if (error.response.status === 500) {
        setSubmitError('Server error');
      }
    }
    reset();
  }

  return (
    <Dialog open={props.openDialog} onClose={props.handleCloseDialog}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle color="text.secondary">Sign in</DialogTitle>
        <DialogContent>

          <TextField autoComplete='on' autoFocus required margin="dense" id="login" label="Login" type="text" fullWidth variant="standard" color="secondary"

            {...register('login', {
              required: 'Login is required',
            })}

          />

          <TextField autoComplete='on' required margin="dense" id="password" label="Password" type={values.showPassword ? 'text' : 'password'} fullWidth variant="standard" color='secondary'

            {...register("password", {
              required: 'Password is required',
            })}

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

          <Box component="div" className='validation-block'>

            <List>

              {
                touchedFields.login ?
                  (<ListItem>
                    {errors?.login ? <ClearIcon color='error' /> : null}
                    {errors?.login ? <Typography component="span">{errors?.login?.message}</Typography> :  null}
                  </ListItem>) : null
              }

              {
                touchedFields.password ?
                  (<ListItem>
                    {errors?.password ? <ClearIcon color='error' /> : null}
                    {errors?.password ? <Typography component="span">{errors?.password?.message}</Typography> : null}
                  </ListItem>)
                  : null
              }

              {
                submitError ?
                  (<ListItem>
                    <ClearIcon color='error' />
                    <Typography component="span">{submitError}</Typography>
                  </ListItem>)
                  : null
              }

            </List>
          </Box>

        </DialogContent>
        <DialogActions>
          <IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }} onClick={props.handleCloseDialog}>
            <CloseIcon />
          </IconButton>
          <Button variant='contained' color='primary' type='submit'>Log in</Button>
          <Button variant='text' color='secondary' onClick={closeSignInDialogOpenSignUpDialog}>Don't have an account yet?</Button>
        </DialogActions>
      </Box>
    </Dialog>

  );
}