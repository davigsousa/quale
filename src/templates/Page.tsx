/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';
import { Provider, Box } from 'reakit';
import 'typeface-raleway';

import Header from '../components/Header';
import style from '../styles';

interface TemplatePageProps {
  children: ReactNode;
}

function TemplatePage(props: TemplatePageProps) {
  return (
    <Provider>
      <Header />
      <Box sx={style.content}>{props.children}</Box>
    </Provider>
  );
}

export default TemplatePage;
