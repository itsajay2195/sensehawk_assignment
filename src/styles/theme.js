import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
export default {
  colors: {
    primaryPink: '#EA4C89',
    white: '#FFFFFF',
    blue: '#0000FF',
    grey: '#808080',
    greyScondray: '#F3F3F4',
    blueSecondary: '#8FB1CC',
    black: '#000000',
  },
  fontSizes: {
    small: 12,
    medium: 16,
    large: 20,
    banerText: 34,
  },
  window: {
    height,
    width,
  },
};
