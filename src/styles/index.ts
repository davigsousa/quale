import { SxStyleProp, Flex } from 'theme-ui';

interface IStyles {
  content: SxStyleProp;
  title: SxStyleProp;
  genreTitle: SxStyleProp;
  twoColumn: SxStyleProp;
  genreBox: SxStyleProp;
  genreBoxTitle: SxStyleProp;
  genre: SxStyleProp;
  lupe: SxStyleProp;
}

const styles: IStyles = {
  content: {
    width: '100%',
    maxWidth: '900px',
    minHeight: '100vh',
    margin: 'auto',
    padding: ['5%', '3%', '0'],
  },
  title: {
    fontSize: [4, 4, 5],
    fontFamily: 'heading',
    textAlign: ['center', 'start', 'start'],
  },
  genreTitle: {
    marginTop: '60px',
    fontSize: [5, 5, 6],
    fontFamily: 'heading',
    textAlign: ['center', 'start', 'start'],
  },
  twoColumn: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 10px',
    margin: ['0', '40px 0'],
    backgroundColor: 'primary',
    borderRadius: '40px',
    flexDirection: ['column-reverse', 'row', 'row'],
  },
  genreBox: {
    width: ['100%', '60%'],
    height: '100%',
    display: 'flex',
    justifyContent: ['center', 'start', 'start'],
    flexWrap: 'wrap',
  },
  genreBoxTitle: {
    fontFamily: 'heading',
    fontWeight: 'bold',
    textAlign: ['center', 'start', 'start'],
    fontSize: [4, 4, 5],
    width: '100%',
    marginBottom: '5px',
    color: '#dcdcdc',
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
    width: ['150px', '240px'],
    marginBottom: ['20px', '0'],
  },
};

export default styles;
