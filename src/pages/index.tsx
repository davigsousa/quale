/** @jsx jsx */
import { jsx } from 'theme-ui';
import PageTemplate from '../templates/Page';

export default function Home() {
  return (
    <PageTemplate>
      <h1 sx={{ fontSize: 5, fontFamily: 'heading' }}>Home</h1>
    </PageTemplate>
  );
}
