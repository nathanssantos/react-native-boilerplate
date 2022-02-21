import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Layout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

export default Layout;
