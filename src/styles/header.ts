import { SxStyleProp } from 'theme-ui';

interface IHeader {
  container: SxStyleProp;
  image: SxStyleProp;
}

const header: IHeader = {
  container: {
    width: '100%',
    height: '150px',
    display: 'flex',
  },
  image: {
    height: '100%',
  },
};

export default header;
