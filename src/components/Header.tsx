/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Button } from 'reakit';

import brand from '../../static/brand.png';

function Header() {
  return (
    <Box>
      <img src={brand} alt="Qualé?" />
    </Box>
  );
}

export default Header;
