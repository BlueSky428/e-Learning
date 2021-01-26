import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const Auth = createStackNavigator();

const Routes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#6548A3' }
    }}
  >
    <Auth.Screen name="Dashboard" component={Dashboard} />
  </Auth.Navigator>
);

export default Routes;