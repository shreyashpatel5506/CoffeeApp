// 👇 Must be the first import in the entry file
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import DrawerNavigation from './src/navigation/DrawerNavigation.js';

// Enable react-native-screens (improves performance too)
enableScreens();

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default App;
