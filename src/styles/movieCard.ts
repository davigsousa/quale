import { SxStyleProp } from 'theme-ui';

interface IMovieCard {
  container: SxStyleProp;
  image: SxStyleProp;
}

const movieCard: IMovieCard = {
  container: {
    width: '100%',
    minHeight: '200px',
    backgroundColor: 'secondary',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    margin: '40px 0',
    borderRadius: '20px',
    transition: '.3s',
    ':hover': {
      transform: 'scale(1.05)',
    },
  },
  image: {
    height: '200px',
    marginRight: '10px',
    borderRadius: '10px',
  },
};

export default movieCard;
