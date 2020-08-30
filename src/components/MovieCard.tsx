/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box } from 'reakit';

import { Movie } from '../interfaces';
import style from '../styles/movieCard';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard(props: MovieCardProps) {
  const { movie } = props;

  return (
    <Box sx={style.container}>
      <img
        sx={style.image}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <Box>
        <Box>
          <h2>
            {movie.title} | {new Date(movie.release_date).toLocaleDateString()}
          </h2>
          <p>
            Nível de popularidade: <strong>{movie.popularity}</strong>
          </p>
        </Box>
        <p>{movie.overview || <i>Sem descrição.</i>}</p>
      </Box>
    </Box>
  );
}

export default MovieCard;
