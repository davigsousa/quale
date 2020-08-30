/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';
import { Provider, Box } from 'reakit';
import 'typeface-raleway';

import SEO from '../components/SEO';
import Header from '../components/Header';
import BackToTop from '../components/BackToTop';
import style from '../styles';

interface TemplatePageProps {
  children: ReactNode;
}

function TemplatePage(props: TemplatePageProps) {
  return (
    <Provider>
      <SEO
        title="Qualé?"
        description="Descubra informações interessantes sobre filmes."
      />
      <Header />
      <Box sx={style.content}>{props.children}</Box>
      <BackToTop />
    </Provider>
  );
}

export default TemplatePage;
