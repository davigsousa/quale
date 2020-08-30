import { SxStyleProp } from 'theme-ui';

interface IHeader {
  container: SxStyleProp;
  image: SxStyleProp;
  title: SxStyleProp;
}

const header: IHeader = {
  container: {
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    padding: '40px',
  },
  image: {
    height: '100%',
    marginX: '100px',
  },
  title: {
    fontFamily: 'heading',
    fontSize: 7,
    fontWeight: 'heading',
  },
};

export default header;
