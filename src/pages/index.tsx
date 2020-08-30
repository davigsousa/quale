/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect } from 'react';
import PageTemplate from '../templates/Page';
import style from '../styles';
import api, { keyString } from '../services/api';

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const response = await api.get(`/genre/movie/list?${keyString}`);

  //     console.log('api', response.data);
  //   })();
  // }, []);

  return (
    <PageTemplate>
      <h1 sx={style.title}>
        Quer saber <i>qualé</i> ou quais são os filmes mais populares de uma
        categoria?
      </h1>
    </PageTemplate>
  );
}
