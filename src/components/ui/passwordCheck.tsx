import { Typography, List, ListItem } from '@mui/material';
import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from 'react';

export const PasswordCheckComponent = (props: any) => {
  
  const lowerCaseCheck = new RegExp('(?=.*[a-z])');
  const upperCaseCheck = new RegExp('(?=.*[A-Z])');
  const numberCheck = new RegExp('(?=.*[0-9])');
  const specialCheck = new RegExp('(?=.*[!@#$%^&*])');
  const lengthCheck = new RegExp('(?=.{8,})');

  const [isValid, setIsValid] = useState<boolean>(false);
  
  useEffect(() => {
    setIsValid(checkAll(props.password));
  }, [props]);

  const checkAll = (password: string) => {
    return (
      lowerCaseCheck.test(password) &&
      upperCaseCheck.test(password) &&
      numberCheck.test(password) &&
      specialCheck.test(password) &&
      lengthCheck.test(password)
    );
  }

  return (
    <>
      <Typography component="h3">Password must contain:</Typography>

      <List>
        <ListItem>
          {lowerCaseCheck.test(props.password) ? <CheckIcon color='success' /> : <ClearIcon color='error' />}
          <Typography component="span">At least one lowercase letter</Typography>
        </ListItem>

        <ListItem>
          {upperCaseCheck.test(props.password) ? <CheckIcon color='success' /> : <ClearIcon color='error' />}
          <Typography component="span">At least one uppercase letter</Typography>
        </ListItem>

        <ListItem>
          {numberCheck.test(props.password) ? <CheckIcon color='success' /> : <ClearIcon color='error' />}
          <Typography component="span">At least one number</Typography>
        </ListItem>

        <ListItem>
          {specialCheck.test(props.password) ? <CheckIcon color='success' /> : <ClearIcon color='error' />}
          <Typography component="span">At least one symbol</Typography>
        </ListItem>

        <ListItem>
          {lengthCheck.test(props.password) ? <CheckIcon color='success' /> : <ClearIcon color='error' />}
          <Typography component="span">At least 8 characters</Typography>
        </ListItem>

      </List>
    </>
  )
}