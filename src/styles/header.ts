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
    justifyContent: 'space-between',
    flexDirection: ['column', 'row', 'row'],
    padding: '40px',
    marginBottom: '40px',
  },
  image: {
    height: '100%',
    marginLeft: ['5%', '10%', '15%'],
  },
  title: {
    fontFamily: 'heading',
    color: 'primary',
    fontSize: [4, 5, 6],
    fontWeight: 'heading',
    marginRight: ['5%', '10%', '15%'],
  },
};

export default header;
