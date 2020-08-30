import { SxStyleProp } from 'theme-ui';

interface IStyles {
  content: SxStyleProp;
  title: SxStyleProp;
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
};

export default styles;
