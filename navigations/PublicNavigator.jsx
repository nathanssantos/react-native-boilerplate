import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens';

const PublicStack = createNativeStackNavigator();

const PublicNavigator = () => (
  <PublicStack.Navigator initialRouteName="Login">
    <PublicStack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
  </PublicStack.Navigator>
);

export default PublicNavigator;
