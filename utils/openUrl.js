import { Linking } from 'react-native';

const openUrl = async (url) => {
  try {
    const canOpenURL = await Linking.canOpenURL(url);

    if (canOpenURL) {
      Linking.openURL(url);
      return true;
    }

    return false;
  } catch (error) {
    return false;
  }
};

export default openUrl;
