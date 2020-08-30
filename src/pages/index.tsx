/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from 'react';
import { Box, Button } from 'reakit';
import { useDisclosureState, DisclosureContent } from 'reakit/Disclosure';

import PageTemplate from '../templates/Page';
import style from '../styles';
import api, { keyString } from '../services/api';
const lupe = require('../../static/lupe.png');

import { Genre, Movie } from '../interfaces';
import MovieCard from '../components/MovieCard';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genre, setGenre] = useState<Genre>({ id: 0, name: '' });
  const disclosure = useDisclosureState({ visible: false });

  useEffect(() => {
    (async () => {
      const response = await api.get(`/genre/movie/list?${keyString}`);
      console.log(response.data);
      setGenres(response.data.genres);
    })();
  }, []);

  const handleGenre = async (newGenre: Genre) => {
    disclosure.toggle();

    if (genre.name) disclosure.toggle();
    setGenre(newGenre);
    setMovies([]);

    const response = await api.get(
      `/discover/movie?page=1&with_genres=${newGenre.id}&${keyString}`
    );

    setMovies(response.data.results);
  };

  return (
    <PageTemplate>
      <h1 sx={style.title}>
        Quer saber <i>qualé</i> ou quais são os filmes mais populares de uma
        categoria?
      </h1>

      <Box sx={style.twoColumn}>
        <Box sx={style.genreBox}>
          <Box sx={style.genreBoxTitle}>Selecione uma categoria</Box>
          {genres.map((item) => (
            <Button
              onClick={() => handleGenre(item)}
              focusable
              sx={style.genre}
            >
              {item.name}
            </Button>
          ))}
        </Box>
        <img sx={style.lupe} src={lupe} alt="Lupa" />
      </Box>

      <DisclosureContent {...disclosure}>
        <h1 sx={style.genreTitle}>{genre.name}</h1>
        {movies.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </DisclosureContent>
    </PageTemplate>
  );
}
