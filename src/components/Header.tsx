/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Button } from 'reakit';
import { Link } from 'gatsby';

const brand = require('../../static/brand.png');
import header from '../styles/header';

function Header() {
  return (
    <Box sx={header.container}>
      <Button focusable>
        {(props) => (
          <Link sx={header.button} {...props} to="/">
            <img id="menu" src={brand} alt="Qualé?" sx={header.image} />
          </Link>
        )}
      </Button>
    </Box>
  );
}

export default Header;
