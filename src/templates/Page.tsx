import React, { ReactNode } from 'react';
import { Provider } from 'reakit';

import Header from '../components/Header';

interface TemplatePageProps {
  children: ReactNode;
}

function TemplatePage(props: TemplatePageProps) {
  const { children } = props;

  return (
    <Provider>
      <Header />
      {children}
    </Provider>
  );
}

export default TemplatePage;
