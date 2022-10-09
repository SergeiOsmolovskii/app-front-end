import * as React from 'react';
import './../../styles/logo.css';

import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import { SvgIcon } from '@mui/material';



import Link from '@mui/material/Link/Link';

export const Logo = () => {
  return (
    <Link href="#" sx={{color: 'logoBG', fill:'logoBG'}}>
      <SvgIcon stroke='primary' component={LogoIcon} inheritViewBox className="logo" />
    </Link>
  );
}