/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Button } from 'reakit';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

function BackToTop() {
  return (
    <Box>
      <Button>{(props) => <AnchorLink {...props} to="/#menu" />}</Button>
    </Box>
  );
}

export default BackToTop;
