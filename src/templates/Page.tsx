import React, { ReactNode } from 'react';
import { Provider } from 'reakit';
import 'typeface-raleway';

import Header from '../components/Header';

interface TemplatePageProps {
  children: ReactNode;
  title: string;
}

function TemplatePage(props: TemplatePageProps) {
  const { children, title } = props;

  return (
    <Provider>
      <Header title={title} />
      {children}
    </Provider>
  );
}

export default TemplatePage;
