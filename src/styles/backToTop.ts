import { SxStyleProp } from 'theme-ui';

interface IBackToTop {
  container: SxStyleProp;
  button: SxStyleProp;
}

const backToTop: IBackToTop = {
  container: {
    position: 'sticky',
    backgroundColor: 'primary',
    left: '95%',
    bottom: '30px',
    marginRight: '10px',
    zIndex: '100',
    width: '80px',
    height: '80px',
    borderRadius: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 2px #5BC1AC',
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: '25px',
    textDecoration: 'none',
    color: 'text',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default backToTop;
