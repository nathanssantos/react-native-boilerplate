import React, { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as SplashScreen from 'expo-splash-screen';
import { NativeBaseProvider, Box } from 'native-base';
// import * as Font from 'expo-font';

import createRootStore from './stores/createRootStore';
import { RootStoreProvider } from './hooks';

import { Layout, Theme } from './constants';
import RootNavigator from './navigations/RootNavigator';

SplashScreen.preventAutoHideAsync();

const App = () => {
  EStyleSheet.build({ $rem: Layout.window.width / 414 });

  const [appIsReady, setAppIsReady] = useState(false);
  const [rootStore, setRootStore] = useState(null);

  const init = async () => {
    try {
      // await Font.loadAsync({
      //   Roboto: require('native-base/Fonts/Roboto.ttf'),
      //   Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      // });

      const store = await createRootStore();
      setRootStore(store);
    } catch (e) {
      console.error(e);
    } finally {
      setAppIsReady(true);
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);

  useEffect(() => {
    init();
  }, []);

  if (!appIsReady) return null;

  return (
    <RootStoreProvider value={rootStore}>
      <NativeBaseProvider theme={Theme}>
        <Box style={styles.container} onLayout={onLayoutRootView} safeArea>
          <RootNavigator />
        </Box>
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </RootStoreProvider>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
