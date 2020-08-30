import React, { ReactNode } from 'react';
import { Provider } from 'reakit';
import 'typeface-raleway';

import Header from '../components/Header';

interface TemplatePageProps {
  children: ReactNode;
}

function TemplatePage(props: TemplatePageProps) {
  return (
    <Provider>
      <Header />
      {props.children}
    </Provider>
  );
}

export default TemplatePage;
