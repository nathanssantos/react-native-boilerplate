import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens';

const PublicStack = createNativeStackNavigator();

const PublicNavigator = () => (
  <PublicStack.Navigator initialRouteName="Home">
    <PublicStack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
  </PublicStack.Navigator>
);

export default PublicNavigator;
