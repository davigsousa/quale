import { SxStyleProp, Flex } from 'theme-ui';

interface IStyles {
  content: SxStyleProp;
  title: SxStyleProp;
  twoColumn: SxStyleProp;
  genreBox: SxStyleProp;
  genre: SxStyleProp;
  lupe: SxStyleProp;
}

const styles: IStyles = {
  content: {
    width: '100%',
    maxWidth: '900px',
    margin: 'auto',
    padding: ['2% 5%', '3%', '0'],
  },
  title: {
    fontSize: [4, 4, 5],
    fontFamily: 'heading',
    textAlign: ['center', 'start', 'start'],
  },
  twoColumn: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 10px',
    margin: '40px 0',
    backgroundColor: 'secondary',
    borderRadius: '40px',
    flexDirection: ['column-reverse', 'column-reverse', 'row'],
  },
  genreBox: {
    width: ['100%', '60%'],
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  genre: {
    backgroundColor: '#dcdcdc',
    color: 'black',
    padding: '10px',
    borderRadius: '10px',
    margin: '5px',
    fontFamily: 'body',
    fontWeight: 'heading',
    fontSize: 2,
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s',
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
  lupe: {
    width: ['200px', '270px'],
  },
};

export default styles;
