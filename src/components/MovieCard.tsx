/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box } from 'reakit';

import { Movie } from '../interfaces';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard(props: MovieCardProps) {
  const { movie } = props;

  return (
    <Box>
      <img src={movie.poster_path} alt={movie.title} />
      <Box>
        <Box>
          <h2>
            {movie.title} | ${movie.release_date}
          </h2>
          <p>{movie.popularity}</p>
        </Box>
        <p>{movie.overview || <i>Sem descrição.</i>}</p>
      </Box>
    </Box>
  );
}

export default MovieCard;
