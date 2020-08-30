/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box } from 'reakit';

const brand = require('../../static/brand.png');
import header from '../styles/header';

function Header() {
  return (
    <Box sx={header.container}>
      <img src={brand} alt="Qualé?" sx={header.image} />
    </Box>
  );
}

export default Header;
