/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from 'react';
import { Box, Button } from 'reakit';
import {
  useDisclosureState,
  Disclosure,
  DisclosureContent,
} from 'reakit/Disclosure';

import PageTemplate from '../templates/Page';
import style from '../styles';
import api, { keyString } from '../services/api';
const lupe = require('../../static/lupe.png');

export default function Home() {
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState('');
  const disclosure = useDisclosureState({ visible: false });

  useEffect(() => {
    (async () => {
      const response = await api.get(`/genre/movie/list?${keyString}`);
      setGenres(response.data.genres);
    })();
  }, []);

  const handleGenre = (name: string) => {
    disclosure.toggle();

    if (genre) disclosure.toggle();
    setGenre(name);
  };

  return (
    <PageTemplate>
      <h1 sx={style.title}>
        Quer saber <i>qualé</i> ou quais são os filmes mais populares de uma
        categoria?
      </h1>

      <Box sx={style.twoColumn}>
        <Box sx={style.genreBox}>
          {genres.map((item) => (
            <Button
              onClick={() => handleGenre(item.name)}
              focusable
              sx={style.genre}
            >
              {item.name}
            </Button>
          ))}
        </Box>
        <img sx={style.lupe} src={lupe} alt="Lupa" />
      </Box>

      <DisclosureContent {...disclosure}>{genre}</DisclosureContent>
    </PageTemplate>
  );
}
