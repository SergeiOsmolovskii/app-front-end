import * as React from 'react';
import './../styles/footer.css';

import Box from '@mui/material/Box/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link/Link';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  return (

    <Box component="footer" className='footer-main' height={80} sx={{backgroundColor: 'primary.main'}}>
      <List sx={{ display: 'flex', height: '100%' }}>

        <ListItem alignItems="center" sx={{ justifyContent: 'center' }}>
          <Link href="https://github.com/SergeiOsmolovskii" target="_blank">
            <GitHubIcon className='github-icon' fontSize="large" />
          </Link>
        </ListItem>

        <ListItem alignItems="center" sx={{ justifyContent: 'center' }}>
          <Typography paragraph color="text.primary" align="center" m={0}> @2022 </Typography>
        </ListItem>

        <ListItem alignItems="center" sx={{ justifyContent: 'center' }}>
          <Link href="https://www.linkedin.com/in/sergei-asmalouskii/" target="_blank">
            <LinkedInIcon className='linked-in-icon' fontSize="large" />
          </Link>
        </ListItem>

      </List>
    </Box>
  );
}