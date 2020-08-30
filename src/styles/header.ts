import { SxStyleProp } from 'theme-ui';

interface IHeader {
  container: SxStyleProp;
  image: SxStyleProp;
}

const header: IHeader = {
  container: {
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    marginBottom: '40px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#030f1c',
    borderBottomWidth: '2px',
  },
  image: {
    height: '100%',
  },
};

export default header;
