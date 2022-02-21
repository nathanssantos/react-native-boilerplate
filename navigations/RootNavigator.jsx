import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react';

import PublicNavigator from './PublicNavigator';
import PrivateNavigator from './PrivateNavigator';

import { useStore } from '../hooks';

const RootStack = createNativeStackNavigator();

const Navigator = () => {
  const store = useStore();

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {store.authStore.isAuthenticated ? (
          <RootStack.Screen
            name="private"
            component={PrivateNavigator}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <RootStack.Screen
            name="public"
            component={PublicNavigator}
            options={{
              headerShown: false,
            }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default observer(Navigator);
