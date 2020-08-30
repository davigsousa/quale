/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Button } from 'reakit';

import brand from '../../static/brand.png';
import header from '../styles/header';

function Header() {
  return (
    <Box sx={header.container}>
      <img src={brand} alt="Qualé?" sx={header.image} />
    </Box>
  );
}

export default Header;
