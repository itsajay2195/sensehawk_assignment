import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
export default {
  colors: {
    primaryPink: '#EA4C89',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f2f2f2',
    dark: '#343a40',
    white: '#FFFFFF',
    red: '#ff0000',
    blue: '#0000FF',
    grey: '#808080',
    greyScondray: '#AEAEAE',
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
