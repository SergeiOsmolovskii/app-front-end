import * as React from 'react';
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import {Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, Box, List, ListItem, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, Close as CloseIcon, Clear as ClearIcon, Check as CheckIcon } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';

import { IShowPassword } from 'models/IShowPassword';
import { IUserForRegistration } from 'models/IUser';


export const SignUpDialog = (props: any) => {

  const [password, setPassword] = useState<IShowPassword>({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setPassword({
      ...password,
      showPassword: !password.showPassword,
    });
  };

  const handleSetPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({
      ...password,
      password: event.target.value,
    });
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const { register, handleSubmit, formState: { errors, isValid, touchedFields }, reset } = useForm<IUserForRegistration>(
    {
      mode: 'onBlur',
      defaultValues: {
        login: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
  });
  const onSubmit: SubmitHandler<IUserForRegistration> = data => {
    console.log(data)
    reset();
  };

  return (
    <Dialog open={props.openDialog} onClose={props.handleCloseDialog}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle color="text.secondary">Sign up</DialogTitle>

        <DialogContent>

          <TextField
            autoComplete='on' autoFocus required id="login" label="Login" type="text" margin="dense" fullWidth variant="standard" color="secondary"
            {...register("login", {
              required: 'Login is required',
              minLength: {
                value: 3,
                message: 'Login must be at least 3 characters'
              },
              maxLength: {
                value: 20,
                message: 'Login must be less than 30 characters'
              }
            })}
          />

          <TextField
            autoComplete='on' required id="email" label="Email" type="email" margin="dense" fullWidth variant="standard" color="secondary"
            {...register("email", {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email is not valid'
              }
            })
            }
          />
          <TextField
            {...register("password", {
              required: 'Password is required',
              pattern:
              {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                message: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number'
              }
            })}

            autoComplete='on' required id="password" label="Password" type={password.showPassword ? 'text' : 'password'} margin="dense" fullWidth variant="standard" color='secondary'
            onChange={handleSetPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                    {password.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            autoComplete='on' required id="passwordRepeat" label="Re-enter your password" type='password' margin="dense" fullWidth variant="standard" color='secondary'
            {...register("confirmPassword", {
              required: 'Password is required',
              validate: value => value === password.password || 'The passwords do not match'
            })
            }
          />
          <Box component="div" className='validation-block'>

            <List>
              {
                touchedFields.login ?
                  (<ListItem>
                    {!errors?.login ? <CheckIcon color='success' /> : <ClearIcon color='error' />}
                    {!errors?.login ? <Typography component="span">Login is valid</Typography> : <Typography component="span">{errors?.login?.message}</Typography>}
                  </ListItem>) : null
              }

              {
                touchedFields.email ?
                  (<ListItem>
                    {errors?.email ? <ClearIcon color='error' /> : <CheckIcon color='success' />}
                    {errors?.email ? <Typography component="span">{errors?.email?.message}</Typography> : <Typography component="span">Email is valid</Typography>}
                  </ListItem>) : null
              }

              {
                touchedFields.password ?
                  (<ListItem>
                    {errors?.password ? <ClearIcon color='error' /> : <CheckIcon color='success' />}
                    {errors?.password ? <Typography component="span">{errors?.password?.message}</Typography> : <Typography component="span">Password is valid</Typography>}
                  </ListItem>)
                  : null
              }

              {
                touchedFields.confirmPassword ?
                  (<ListItem>
                    {errors?.confirmPassword ? <ClearIcon color='error' /> : <CheckIcon color='success' />}
                    {errors?.confirmPassword ? <Typography component="span">{errors?.confirmPassword?.message}</Typography> : <Typography component="span">Passwords match</Typography>}
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
          <Button variant='contained' color='primary' type='submit' disabled={!isValid} >Sign Up</Button>
        </DialogActions>
      </Box>
    </Dialog>
  )

}