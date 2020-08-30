/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box } from 'reakit';

const brand = require('../../static/brand.png');
import header from '../styles/header';

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <Box sx={header.container}>
      <img src={brand} alt="Qualé?" sx={header.image} />
      <h1 sx={header.title}>{title}</h1>
    </Box>
  );
}

export default Header;
