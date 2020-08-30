import { SxStyleProp } from 'theme-ui';

interface IHeader {
  container: SxStyleProp;
  image: SxStyleProp;
  button: SxStyleProp;
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
    borderBottomColor: '#041627',
    borderBottomWidth: '2px',
  },
  image: {
    height: '100%',
  },
  button: {
    height: '100%',
  },
};

export default header;
