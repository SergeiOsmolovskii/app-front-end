import * as React from 'react';

import './../styles/footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  return (
    <footer className='footer-main'>
      <ul className='footer-main-list'>
        <li className='footer-main-list--item'>
          <a href="https://github.com/SergeiOsmolovskii" target="_blank">
            <GitHubIcon className='github-icon' fontSize="large"/>
          </a>
        </li>
        <li className='footer-main-list--item'>
          <p>© 2022</p>
        </li>
        <li className='footer-main-list--item'>
          <a href="https://www.linkedin.com/in/sergei-asmalouskii/" target="_blank">
            <LinkedInIcon className='linked-in-icon' fontSize="large"/>
          </a>
        </li>
      </ul>
    </footer>
  );
}