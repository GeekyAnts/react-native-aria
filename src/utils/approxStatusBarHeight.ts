import { Platform, StatusBar } from 'react-native';

const IOS_STATUS_BAR_HEIGHT = 20;

// IOS >= 11 handle using SafeAreaView
export const APPROX_STATUSBAR_HEIGHT = Platform.select({
  android: StatusBar.currentHeight,
  ios: Platform.Version < 11 ? IOS_STATUS_BAR_HEIGHT : 0,
});
