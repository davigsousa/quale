/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Button } from 'reakit';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import style from '../styles/backToTop';

function BackToTop() {
  return (
    <Box sx={style.container}>
      <Button>
        {(props) => (
          <AnchorLink {...props} sx={style.button} to="/#menu">
            Voltar ao topo
          </AnchorLink>
        )}
      </Button>
    </Box>
  );
}

export default BackToTop;
