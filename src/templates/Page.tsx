import React, { ReactNode } from 'react';
import { Provider } from 'reakit';

interface TemplatePageProps {
  children: ReactNode;
}

function TemplatePage(props: TemplatePageProps) {
  const { children } = props;

  return <Provider>{children}</Provider>;
}

export default TemplatePage;
