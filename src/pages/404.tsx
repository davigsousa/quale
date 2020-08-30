/** @jsx jsx */
import { jsx } from 'theme-ui';
import style from '../styles';
import PageTemplate from '../templates/Page';

export default function NotFound() {
  return (
    <PageTemplate>
      <h1 sx={style.title}>Essa página não existe.</h1>
    </PageTemplate>
  );
}
